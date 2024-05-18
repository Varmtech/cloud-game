/**
 * Worker manager module.
 * @version 1
 */
import {utils} from "./utils";
import {socket} from "./network/socket";
import {GET_SERVER_LIST, event} from "./event/event";
import {log} from "./log";
import {ajax} from "./network/ajax";

export const workerManager = (() => {
        const trigger = document.getElementById('w'),
            index = ((i = 1) => ({v: () => i++, r: () => i = 1}))();

    let state = {
        lastId: null,
        workers: [],
    }

    const onNewData = (dat = {servers: []}) => {
        index.r();
        state.workers = dat?.servers || [];
    }

    function handleReload() {
        socket.getServerList();
    }

    if(trigger) {
        trigger.addEventListener('click', () => {
            handleReload();
        })
    }

    const checkLatencies = (data) => {
        const _addresses = data.addresses?.split(',') || [];
        const timeoutMs = 1111;
        // deduplicate
        const addresses = [...new Set(_addresses)];

        return Promise.all(addresses.map(address => {
            const start = Date.now();
            return ajax.fetch(`${address}?_=${start}`, {method: "GET", redirect: "follow"}, timeoutMs)
                .then(() => ({[address]: Date.now() - start}))
                .catch(() => ({[address]: 9999}));
        }))
    };

    const whoami = (id) => {
        state.lastId = id;
    }

    event.sub(GET_SERVER_LIST, onNewData);

    return {
        checkLatencies,
        whoami,
    }
})(ajax, document, event, log, socket, utils);
