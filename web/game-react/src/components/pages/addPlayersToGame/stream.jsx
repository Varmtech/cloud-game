import React, {useEffect, useState} from "react";
import styled from 'styled-components'



export function Stream() {

    useEffect(()=>{
        console.log('mounted')
    }, [])
    return (
        <VideoWrapper>
            <GameVideo id="stream" className="game-screen"  muted playsInline preload="none"/>
        </VideoWrapper>
    )
}

const VideoWrapper = styled.div`
`

const GameVideo = styled.video`
  height: calc(100% - 52px);
  z-index: 9;
  top: 0;
`