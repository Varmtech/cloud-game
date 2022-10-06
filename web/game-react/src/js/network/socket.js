/**
 * WebSocket connection module.
 *
 *  Needs init() call.
 *
 * @version 1
 */
import {log} from "../log";
import {
    event, GAME_LOADED, GAME_PLAYER_IDX, GAME_ROOM_AVAILABLE, GAME_SAVED, GET_SERVER_LIST, LATENCY_CHECK_REQUESTED,
    MEDIA_STREAM_CANDIDATE_ADD,
    MEDIA_STREAM_INITIALIZED,
    MEDIA_STREAM_SDP_AVAILABLE, PING_REQUEST,
    PING_RESPONSE, RECORDING_STATUS_CHANGED
} from "../event/event";
import store from "../../store";

export const socket = (() => {
    // TODO: this ping is for maintain websocket state
    /*
        https://tools.ietf.org/html/rfc6455#section-5.5.2

        Chrome doesn't support
            https://groups.google.com/a/chromium.org/forum/#!topic/net-dev/2RAm-ZYAIYY
            https://bugs.chromium.org/p/chromium/issues/detail?id=706002

        Firefox has option but not enable 'network.websocket.timeout.ping.request'

        Suppose ping message must be sent from WebSocket Server.
        Gorilla WS doesnot support it.
        https://github.com/gorilla/websocket/blob/5ed622c449da6d44c3c8329331ff47a9e5844f71/examples/filewatch/main.go#L104

        Below is high level implementation of ping.
        // TODO: find the best ping time, currently 2 seconds works well in Chrome+Firefox
    */
    const pingIntervalMs = 2000;
    let pingIntervalId = 0;

    let conn;

    const init = (roomId, wid, zone) => {
        let objParams = {room_id: roomId, zone: ''};
        if (wid) objParams.wid = wid;
        const params = new URLSearchParams(objParams).toString()
        const address = window.location.protocol !== 'https:' ? `ws://localhost:8000/ws?${params}` : `wss:${window.location.host}/ws?${params}`;
        // const address = window.location.protocol !== 'https:' ? `ws://192.168.178.135:8000/ws?${params}` : `wss:${window.location.host}/ws?${params}`;
        console.info(`[ws] connecting to ${address}`);
        conn = new WebSocket(address);

        // Clear old roomID
        conn.onopen = () => {
            if (pingIntervalId > 0) return;
            log.info('[ws] <- open connection');
            log.info(`[ws] -> setting ping interval to ${pingIntervalMs}ms`);
            // !to add destructor if SPA
            pingIntervalId = setInterval(ping, pingIntervalMs);
        };
        conn.onerror = (e) => log.error('[ws] some error!', e);
        conn.onclose = (event) => log.info(`[ws] closed (${event.code})`);
        // Message received from server
        conn.onmessage = response => {
            const data = JSON.parse(response.data);
            const message = data.id;

            if (message !== 'heartbeat') log.debug(`[ws] <- message '${message}' `, data);

            switch (message) {
                case 'init':
                    console.log('init in socket pub ... ', message)
                    // TODO: Read from struct
                    // init package has 3 part [xid, stunturn, game1, game2, game3 ...]
                    const [xid, stunturn, ...games] = JSON.parse(data.data);
                    // let serverData = data.data);
                    event.pub(MEDIA_STREAM_INITIALIZED, {xid: xid, stunturn: stunturn, games: games});
                    break;
                case 'offer':
                    // this is offer from worker
                    event.pub(MEDIA_STREAM_SDP_AVAILABLE, {sdp: data.data});
                    break;
                case 'ice_candidate':
                    event.pub(MEDIA_STREAM_CANDIDATE_ADD, {candidate: data.data});
                    break;
                case 'heartbeat':
                    event.pub(PING_RESPONSE);
                    break;
                case 'start':
                    event.pub(GAME_ROOM_AVAILABLE, {roomId: data.room_id});
                    break;
                case 'save':
                    event.pub(GAME_SAVED);
                    break;
                case 'load':
                    event.pub(GAME_LOADED);
                    break;
                case 'player_index':
                    event.pub(GAME_PLAYER_IDX, data.data);
                    break;
                case 'checkLatency':
                    event.pub(LATENCY_CHECK_REQUESTED, {packetId: data.packet_id, addresses: data.data});
                    break;
                case 'recording':
                    event.pub(RECORDING_STATUS_CHANGED, data.data);
                    break;
                case 'get_server_list':
                    event.pub(GET_SERVER_LIST, JSON.parse(data.data));
                    break;
                default:
                    break
            }
        };
    };

    /**
     * Abnormal connection termination cleanup.
     */
    const abort = () => {
        if (pingIntervalId < 0) return;

        log.info('[ws] ping has been disabled');
        clearInterval(pingIntervalId);
        pingIntervalId = 0;
    }

    // TODO: format the package with time
    const ping = () => {
        const time = Date.now();
        send({"id": "heartbeat", "data": time.toString()});
        event.pub(PING_REQUEST, {time: time});
    }
    const send = (data) => {
        if (conn.readyState === 1) {
            conn.send(JSON.stringify(data));
        }
    }
    const latency = (workers, packetId) => send({
        "id": "checkLatency",
        "data": JSON.stringify(workers),
        "packet_id": packetId
    });
    const saveGame = () => send({"id": "save", "data": ""});
    const loadGame = () => send({"id": "load", "data": ""});
    const updatePlayerIndex = (idx) => send({"id": "player_index", "data": idx.toString()});
    const startGame = (gameName, isMobile, roomId, record, recordUser, playerIndex) => {
        const { AuthReducer: { guestUserData, userData } } = store.getState();
        send({
            "id": "start",
            "data": JSON.stringify({
                "game_name": gameName,
                "record": record,
                "record_user": recordUser,
            }),
            "room_id": roomId != null ? roomId : '',
            // "room_id": '',
            "player_info": JSON.stringify(userData || guestUserData),
            "player_index": playerIndex
        });
    }
    const quitGame = (roomId) => send({"id": "quit", "data": "", "room_id": roomId});
    const toggleMultitap = () => send({"id": "multitap", "data": ""});
    const toggleRecording = (active = false, userName = '') => send({
        "id": "recording", "data": JSON.stringify({"active": active, "user": userName,})
    })
    const getServerList = () => send({"id": "get_server_list", "data": "{}"})

    return {
        init: init,
        abort: abort,
        send: send,
        latency: latency,
        saveGame: saveGame,
        loadGame: loadGame,
        updatePlayerIndex: updatePlayerIndex,
        startGame: startGame,
        quitGame: quitGame,
        toggleMultitap: toggleMultitap,
        toggleRecording: toggleRecording,
        getServerList,
    }
})(event, log);
