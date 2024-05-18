import React from "react";

export function PlayersSlider() {
    return (
        <div id="slider-playeridx" className="slidecontainer">
            player choice
            <input type="range" min="1" max="4" value="1" className="slider" id="playeridx" onKeyDown="event.preventDefault()" />
        </div>
    )
}