import './App.css';
import {Arrows} from "./components/arrows";
import {Screen} from "./components/screen";
import {GuideText} from "./components/guideText";
import {PlayersSlider} from "./components/playersSlider";
import {HolderButtons} from "./components/holderButtons";
import useScript from "./hooks/useScript";
import {GameList} from "./components/gameList";
import styled from "styled-components";
import {Header} from "./components/header";
import React from "react";

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
            <MainContainer>
                <GamesNewContainer>
                    <PageWrapper>
                        <Header/>
                        <GameList/>
                    </PageWrapper>
                </GamesNewContainer>
                <GamesOldContainer>
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

                        TODO: remove
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

                </GamesOldContainer>
            </MainContainer>
        </div>
    );
}

const MainContainer = styled.div`
    display: flex;
`
const GamesOldContainer = styled.div`
  display: none;
  position: relative;
  height: 100vh;
  width: 50vw;
`
const GamesNewContainer = styled.div`
  height: 100vh;
  width: 540px;
  background-color: #013094;
  @media (max-width: 570px) {
    width: 100%;
  }
`
const PageWrapper = styled.div`
  margin: auto;
  padding: 46px 16px;
  height: calc(100% - 92px);
`
export default App;
