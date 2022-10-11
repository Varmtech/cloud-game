/**
 * Joystick controls.
 *
 * cross == a      <--> a
 * circle == b     <--> b
 * square == x     <--> start
 * triangle == y   <--> select
 * share           <--> load
 * option          <--> save
 * L2 == LT        <--> full
 * R2 == RT        <--> quit
 * dpad            <--> up down left right
 * axis 0, 1       <--> second dpad
 *
 * change full to help (temporary)
 *
 * @version 1
 */
import {KEY} from "./keys";
import {
    KEY_PRESSED,
    KEY_RELEASED,
    event,
    AXIS_CHANGED,
    GAMEPAD_CONNECTED,
    DPAD_TOGGLE,
    GAMEPAD_DISCONNECTED
} from "../event/event";
import {env} from "../env";
import {log} from "../log";
import store from "../../store";
import {setJoystickLogAC, setLogAC, setOsLogAC} from "../../store/games/actions";

export const joystick = (() => {
    const deadZone = 0.1;
    let joystickMap;
    let joystickState = {};
    let joystickAxes = [];
    let joystickIdx;
    let joystickTimer = null;
    let dpadMode = true;

    function onDpadToggle(checked) {
        if (dpadMode === checked) {
            return //error?
        }
        if (dpadMode) {
            dpadMode = false;
            // reset dpad keys pressed before moving to analog stick mode
            checkJoystickAxisState(KEY.LEFT, false);
            checkJoystickAxisState(KEY.RIGHT, false);
            checkJoystickAxisState(KEY.UP, false);
            checkJoystickAxisState(KEY.DOWN, false);
        } else {
            dpadMode = true;
            // reset analog stick axes before moving to dpad mode
            joystickAxes.forEach(function (value, index) {
                checkJoystickAxis(index, 0);
            });
        }
    }

    // check state for each axis -> dpad
    function checkJoystickAxisState(name, state) {
        if (joystickState[name] !== state) {
            joystickState[name] = state;
            event.pub(state === true ? KEY_PRESSED : KEY_RELEASED, {key: name});
        }
    }

    function checkJoystickAxis(axis, value) {
        if (-deadZone < value && value < deadZone) value = 0;
        if (joystickAxes[axis] !== value) {
            joystickAxes[axis] = value;
            event.pub(AXIS_CHANGED, {id: axis, value: value});
        }
    }

    // loop timer for checking joystick state
    function checkJoystickState() {
        let gamepad = navigator.getGamepads()[joystickIdx];
        if (gamepad) {
            // if (dpadMode) {
                // axis -> dpad
                let corX = gamepad.axes[0]; // -1 -> 1, left -> right
                let corY = gamepad.axes[1]; // -1 -> 1, up -> down
                checkJoystickAxisState(KEY.LEFT, corX <= -0.5);
                checkJoystickAxisState(KEY.RIGHT, corX >= 0.5);
                checkJoystickAxisState(KEY.UP, corY <= -0.5);
                checkJoystickAxisState(KEY.DOWN, corY >= 0.5);
            // } else {
                gamepad.axes.forEach(function (value, index) {
                    checkJoystickAxis(index, value);
                });
            // }

            // normal button map
            Object.keys(joystickMap).forEach(function (btnIdx) {
                const buttonState = gamepad.buttons[btnIdx];

                const isPressed = navigator.webkitGetGamepads ? buttonState === 1 :
                    buttonState.value > 0 || buttonState.pressed === true;

                if (joystickState[btnIdx] !== isPressed) {
                    joystickState[btnIdx] = isPressed;
                    store.dispatch(setJoystickLogAC(btnIdx))
                    event.pub(isPressed === true ? KEY_PRESSED : KEY_RELEASED, {key: joystickMap[btnIdx]});
                }
            });
        }
    }

    // we only capture the last plugged joystick
    const onGamepadConnected = (e) => {
        let gamepad = e.gamepad;
        log.info(`Gamepad connected at index ${gamepad.index}: ${gamepad.id}. ${gamepad.buttons.length} buttons, ${gamepad.axes.length} axes.`);

        joystickIdx = gamepad.index;

        // Ref: https://github.com/giongto35/cloud-game/issues/14
        // get mapping first (default KeyMap2)
        let os = env.getOs();
        let browser = env.getBrowser();

        if (os === 'android') {
            store.dispatch(setOsLogAC('android'))
            // default of android is KeyMap1
            joystickMap = {
                2: KEY.A,
                // 2: KEY.START,
                0: KEY.B,
                // 3: KEY.START,
                3: KEY.X,
                // 4: KEY.SELECT,
                4: KEY.Y,
                10: KEY.SELECT,
                // 10: KEY.LOAD,
                11: KEY.START,
                // 11: KEY.SAVE,
                8: KEY.Z,
                // 9: KEY.QUIT,
                12: KEY.UP,
                13: KEY.DOWN,
                14: KEY.LEFT,
                15: KEY.RIGHT
            };
        } else {
            store.dispatch(setOsLogAC('default'))
            // default of other OS is KeyMap2
            joystickMap = {
                0: KEY.A,
                1: KEY.B,
                2: KEY.X,
                // 3: KEY.SELECT,
                3: KEY.Y,
                8: KEY.SELECT,
                // 8: KEY.LOAD,
                9: KEY.START,
                // 9: KEY.SAVE,
                6: KEY.Z,
                // 7: KEY.QUIT,
                12: KEY.UP,
                13: KEY.DOWN,
                14: KEY.LEFT,
                15: KEY.RIGHT
            };
        }

        if (os === 'android' && (browser === 'firefox' || browser === 'uc')) { //KeyMap2
            store.dispatch(setOsLogAC('android - browser = firefox || uc'))
            joystickMap = {
                0: KEY.A,
                1: KEY.B,
                2: KEY.X,
                // 2: KEY.START,
                // 3: KEY.SELECT,
                3: KEY.Y,
                8: KEY.SELECT,
                // 8: KEY.LOAD,
                9: KEY.START,
                // 9: KEY.SAVE,
                6: KEY.Z,
                // 7: KEY.QUIT,
                12: KEY.UP,
                13: KEY.DOWN,
                14: KEY.LEFT,
                15: KEY.RIGHT
            };
        }

        if (os === 'win' && browser === 'firefox') { //KeyMap3
            store.dispatch(setOsLogAC('win - browser = firefox '))
            joystickMap = {
                // 1: KEY.START,
                1: KEY.B,
                2: KEY.X,
                0: KEY.A,
                // 0: KEY.START,
                // 3: KEY.SELECT,
                3: KEY.Y,
                8: KEY.SELECT,
                // 8: KEY.LOAD,
                9: KEY.START,
                // 9: KEY.SAVE,
                6: KEY.Z,
                // 7: KEY.QUIT
            };
        }

        if (os === 'mac' && browser === 'safari') { //KeyMap4
            store.dispatch(setOsLogAC('mac - browser = safari '))
            joystickMap = {
                0: KEY.A,
                // 0: KEY.A,
                1: KEY.B,
                2: KEY.X,
                // 2: KEY.START,
                // 3: KEY.SELECT,
                3: KEY.Y,
                8: KEY.SELECT,
                9: KEY.START,
                6: KEY.Z,
                // 7: KEY.QUIT,
                12: KEY.UP,
                13: KEY.DOWN,
                14: KEY.LEFT,
                15: KEY.RIGHT
            };
        }

        if (os === 'mac' && browser === 'firefox') { //KeyMap5
            store.dispatch(setOsLogAC('mac - browser = firefox '))
            joystickMap = {
                1: KEY.START,
                // 1: KEY.A,
                2: KEY.B,
                0: KEY.A,
                // 0: KEY.START,
                // 3: KEY.SELECT,
                3: KEY.Y,
                8: KEY.LOAD,
                9: KEY.SAVE,
                6: KEY.Z,
                // 7: KEY.QUIT,
                14: KEY.UP,
                15: KEY.DOWN,
                16: KEY.LEFT,
                17: KEY.RIGHT
            };
        }

        // https://bugs.chromium.org/p/chromium/issues/detail?id=1076272
        if (gamepad.id.includes('PLAYSTATION(R)3')) {
            store.dispatch(setOsLogAC('PLAYSTATION(R)3 '))
            if (browser === 'chrome') {
                store.dispatch(setOsLogAC('chrome  - PLAYSTATION(R)3 '))
                joystickMap = {
                    1: KEY.START,
                    // 1: KEY.A,
                    0: KEY.B,
                    2: KEY.Y,
                    3: KEY.X,
                    4: KEY.L,
                    5: KEY.R,
                    8: KEY.SELECT,
                    9: KEY.A,
                    // 9: KEY.START,
                    10: KEY.DTOGGLE,
                    11: KEY.R3,
                };
            } else {
                store.dispatch(setOsLogAC('else  - PLAYSTATION(R)3 '))
                joystickMap = {
                    13: KEY.START,
                    // 13: KEY.A,
                    14: KEY.B,
                    12: KEY.X,
                    15: KEY.Y,
                    3:  KEY.A,
                    // 3:  KEY.START,
                    0:  KEY.SELECT,
                    4:  KEY.UP,
                    6:  KEY.DOWN,
                    7:  KEY.LEFT,
                    5:  KEY.RIGHT,
                    10: KEY.L,
                    11: KEY.R,
                    8:  KEY.L2,
                    9:  KEY.R2,
                    1:  KEY.DTOGGLE,
                    2:  KEY.R3,
                };
            }
        }

        // reset state
        joystickState = {[KEY.LEFT]: false, [KEY.RIGHT]: false, [KEY.UP]: false, [KEY.DOWN]: false};
        Object.keys(joystickMap).forEach(function (btnIdx) {
            joystickState[btnIdx] = false;
        });

        joystickAxes = new Array(gamepad.axes.length).fill(0);

        // looper, too intense?
        if (joystickTimer !== null) {
            clearInterval(joystickTimer);
        }

        joystickTimer = setInterval(checkJoystickState, 10); // miliseconds per hit
        event.pub(GAMEPAD_CONNECTED);
    };

    event.sub(DPAD_TOGGLE, (data) => onDpadToggle(data.checked));

    return {
        init: () => {
            // we only capture the last plugged joystick
            window.addEventListener('gamepadconnected', onGamepadConnected);

            // disconnected event is triggered
            window.addEventListener('gamepaddisconnected', (event) => {
                clearInterval(joystickTimer);
                log.info(`Gamepad disconnected at index ${event.gamepad.index}`);
                event.pub(GAMEPAD_DISCONNECTED);
            });

            log.info('[input] joystick has been initialized');
        }
    }
})(event, env, KEY, navigator, window);