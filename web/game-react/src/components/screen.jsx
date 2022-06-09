import React from "react";

export function Screen () {
    return (
        <div id="bottom-screen">
            <div id="stats-overlay" className="no-select"/>
          {/* NOTE: New browser doesn't allow unmuted video player. So we muted here.
                There is still audio because current audio flow is not from media but it is manually encoded (technical webRTC challenge). Later, when we can integrate audio to media, we can face the issue with mute again .
                https://developers.google.com/web/updates/2017/09/autoplay-policy-changes*/}
            <video id="stream" className="game-screen" hidden muted playsInline preload="none"/>

            <div id="menu-screen">
                <div id="menu-container"/>
                <div id="menu-item-choice"/>
            </div>
        </div>
    )
}