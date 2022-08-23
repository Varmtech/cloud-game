import { memo } from 'react'
import { useDrop } from 'react-dnd'
import styled from "styled-components";
import {colors} from "../../../Helpers/UI/constants";
import PlayerBadge from "../Games/playerBadge";
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}
export const Dustbin = memo(function Dustbin({ onDrop, player}) {
    const {accepts, lastDroppedItem} = player;

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: accepts,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    const isActive = isOver && canDrop
    let backgroundColor = ''
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        /*<div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
            {isActive
                ? 'Release to drop'
                : `This dustbin accepts: ${accepts.join(', ')}`}

            {lastDroppedItem && (
                <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
            )}
        </div>*/
      <>
          {player.id ?
              <>
                  <PlayerBadge player={{avatar: player.avatarUrl}} size={66}/>
                  <PlayerName>{player.name === 'MyUser' ? 'You' : player.name} ({player.host ? 'Host' : ''})</PlayerName>
              </> :
              <PlayerEmptyBadge ref={drop} style={{ backgroundColor }} data-testid="dustbin"/>
          }
      </>
    )
})

const PlayerEmptyBadge = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 38%;
  background-color: ${colors.beige};
  opacity: 0.35;

  @media (max-width: 355px) {
    width: 58px;
    height: 58px;
  }
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