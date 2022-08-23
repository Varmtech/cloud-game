import {GamesOldContainer} from "../pages/Games";
import {Arrows} from "./arrows";
import {Screen} from "./screen";
import {GuideText} from "./guideText";
import {PlayersSlider} from "./playersSlider";
import {HolderButtons} from "./holderButtons";
import React from "react";

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