import React from "react";
import styled from 'styled-components'
import {ReactComponent as LoaderIcon} from "../../img/icons/Loader.svg";

export function PlayerBadge({player, size, smSize}) {
    return (
        <PlayerContainer size={size} smSize={smSize}>
            {player.avatar ? <AvatarImage src={player.avatar} /> : <LoaderIcon/> }
        </PlayerContainer>
    )
}

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  min-width: ${props => props.size ? `${props.size}px` : '60px'};
  max-width: ${props => props.size ? `${props.size}px` : '60px'};
  height: ${props => props.size ? `${props.size}px` : '60px'};
  border-radius: 38%;

  @media (max-width: 355px) {
    min-width: ${props => props.size ? props.smSize ? `${props.smSize}px` : `${props.size - 8}px` : '52px'};;
    max-width: ${props => props.size ? props.smSize ? `${props.smSize}px` : `${props.size - 8}px` : '52px'};;
    height: ${props => props.size ? props.smSize ? `${props.smSize}px` : `${props.size - 8}px` : '52px'};;
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

