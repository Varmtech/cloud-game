import './App.css';
import {Arrows} from "./components/arrows";
import {Screen} from "./components/screen";
import {GuideText} from "./components/guideText";
import {PlayersSlider} from "./components/playersSlider";
import {HolderButtons} from "./components/holderButtons";
import useScript from "./hooks/useScript";

function App() {
    useScript('gui/gui.js');
    useScript('utils.js');
    useScript('gui/message.js');
    useScript('log.js');
    useScript('event/event.js');
    useScript('network/socket.js');
    useScript('input/keys.js');
    useScript('settings/opts.js');
    useScript('settings/settings.js');
    useScript('env.js');
    useScript('input/input.js');
    useScript('gameList.js');
    useScript('stream/stream.js');
    useScript('room.js');
    useScript('network/ajax.js');
    useScript('network/rtcp.js');
    useScript('workerManager.js');
    useScript('recording.js');
    useScript('stats/stats.js');
    useScript('controller.js');
    useScript('input/keyboard.js');
    useScript('input/touch.js');
    useScript('input/joystick.js');
    useScript('init.js');
    return (
        <div className="App">
            <div id="gamebody">
                <Arrows/>

                <Screen/>

                <div id="servers"/>

                <GuideText/>

                <div id="btn-load" className="btn big unselectable" value="load"/>
                <div id="btn-save" className="btn big unselectable" value="save"/>
                <div id="btn-join" className="btn big unselectable" value="join"/>

                <PlayersSlider/>

                <div id="btn-quit" className="btn big unselectable" value="quit"/>
                <div id="btn-select" className="btn big unselectable" value="select"/>
                <div id="btn-start" className="btn big unselectable" value="start"/>

                <HolderButtons/>


                <div id="btn-settings" className="btn unselectable" value="settings"/>

                {/*TODO: remove*/}
                <input id="room-txt" type="text" placeholder="room id..." className=" unselectable" disabled/>

                <label className="dpad-toggle-label" title="D-pad toggle">
                    <input type="checkbox" id="dpad-toggle" checked/>
                    <span className="dpad-toggle-slider"/>
                </label>

                <div id="noti-box" className="unselectable">Oh my god</div>

                <div id="help-overlay" className="hidden">
                    <div id="help-overlay-background"/>
                    <div id="help-overlay-detail"/>
                </div>
                <div id="btn-help" className="btn unselectable" value="help"/>
            </div>

            <div id="app-settings" className="modal-window">
                <div>
                    <div className="settings__controls">
                        <span title="Save" id="settings__controls__save" className="semi-button">↑</span>
                        <span title="Load" id="settings__controls__load" className="semi-button">↓</span>
                        <span title="Reset" id="settings__controls__reset" className="semi-button">⟲</span>
                        <span title="Close" id="settings__controls__close" className="semi-button">X</span>
                    </div>
                    <h1>Options</h1>
                    <div id="settings-data"/>
                    <div>
                        * -- applied after application restart
                    </div>
                </div>
            </div>

            <div className="source">
                <span id="v">69ff8ae</span>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/giongto35/cloud-game">
                    Source code on GitHub
                </a>
            </div>
            <script src="./js/gui/gui.js"/>
            <script src="./js/utils.js"/>
            <script src="./js/gui/message.js"/>
            <script src="./js/log.js"/>
            <script src="./js/event/event.js"/>
            <script src="./js/network/socket.js"/>
            <script src="./js/input/keys.js"/>
            <script src="./js/settings/opts.js"/>
            <script src="./js/settings/settings.js"/>
            <script src="./js/env.js"/>
            <script src="./js/input/input.js"/>
            <script src="./js/gameList.js"/>
            <script src="./js/stream/stream.js"/>
            <script src="./js/room.js"/>
            <script src="./js/network/ajax.js"/>
            <script src="./js/network/rtcp.js"/>
            <script src="./js/workerManager.js"/>
            <script src="./js/recording.js"/>
            <script src="./js/stats/stats.js"/>
            <script src="./js/controller.js"/>
            <script src="./js/input/keyboard.js"/>
            <script src="./js/input/touch.js"/>
            <script src="./js/input/joystick.js"/>
        </div>
    );
}

export default App;
