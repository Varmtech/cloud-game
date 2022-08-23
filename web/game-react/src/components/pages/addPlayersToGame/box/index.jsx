import React, { memo } from 'react'
import { useDrag } from 'react-dnd'
import PlayerBadge from "../../Games/playerBadge";
import styled from "styled-components";
import {colors} from "../../../../Helpers/UI/constants";

const Box = memo(function Box({ spectator, isDropped, key, index }) {
    const { name, type, id } = spectator;

    const [{ opacity }, drag] = useDrag(
        () => ({
            type,
            item: { name, id },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [name, type],
    )
    return (
        /*<div ref={drag} style={{ ...style, opacity }} data-testid="box">
            {isDropped ? <s>{name}</s> : name}
        </div>*/
        <>
            {index % 4 === 0 ?
                <>
                    <Separator/>
                    <SpectatorItem ref={drag} style={{ opacity }} data-testid="box">
                        <PlayerBadge player={{avatar: spectator.avatarUrl}} size={66}/>
                        <PlayerName>{spectator.name}</PlayerName>
                    </SpectatorItem>
                </>
                :
                <SpectatorItem ref={drag} style={{ opacity }} data-testid="box">
                    <PlayerBadge player={{avatar: spectator.avatarUrl}} size={66}/>
                    <PlayerName>{spectator.name}</PlayerName>
                </SpectatorItem>}
        </>
    )
})

export default Box;

const SpectatorItem = styled.div`
    margin-bottom: 22px;
  cursor: grab;
`

const Separator = styled.div`
  flex-basis: 100%;
`

const PlayerName = styled.h4`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;
  text-align: center;
  color: ${colors.white};
  margin: 6px 0 0;
`