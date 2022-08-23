import {settings} from "./settings/settings";
import {log} from "./log";
import {stream} from "./stream/stream";
import {room} from "./room";
import {socket} from "./network/socket";
import {keyboard} from "./input/keyboard";
import {opts} from "./settings/opts";
import {joystick} from "./input/joystick";

settings.init();

(() => {
    let lvl = settings.loadOr(opts.LOG_LEVEL, log.DEFAULT);
    // migrate old log level options
    // !to remove at some point
    if (isNaN(lvl)) {
        console.warn(
            `The log value [${lvl}] is not supported! ` +
            `The default value [debug] will be used instead.`);
        settings.set(opts.LOG_LEVEL, `${log.DEFAULT}`)
        lvl = log.DEFAULT
    }
    log.level = lvl
})();

keyboard.init();
joystick.init();
stream.init();

const [roomId, zone] = room.loadMaybe();
// find worker id if present
const wid = new URLSearchParams(document.location.search).get('wid');
// if from URL -> start game immediately!
socket.init(roomId, wid, zone);
