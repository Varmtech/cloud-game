import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import Example from "../example";



export default function DragPlayers() {

    useEffect(()=>{
        console.log('mounted')
    }, [])
    return (
        <DndProvider backend={HTML5Backend}>
            <Example />
        </DndProvider>
    )
}

const VideoWrapper = styled.div`
`

const GameVideo = styled.video`
  height: calc(100% - 52px);
  z-index: 9;
  top: 0;
`