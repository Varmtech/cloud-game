import React, {useState} from "react";
import styled from 'styled-components'
import {ReactComponent as LoaderIcon} from "../../../../img/icons/Loader.svg";
import DefaultAvatar from '../../../../img/icons/defaulsAvatar.svg';

export default function PlayerAvatar({player, size, smSize}) {
    const [trueAvatar, setTrueAvatar] = useState(player.avatar_url);

    return (
        <PlayerAvatarContainer size={size} smSize={smSize} background={player.avatar_background}>
            {player.avatar_url ? <AvatarImage
                src={trueAvatar ? player.avatar_url : DefaultAvatar}
                onError={(e) => {
                    e.target.onerror = null; // prevents looping
                    setTrueAvatar(false);
                }}/>
                : <LoaderIcon/>}
        </PlayerAvatarContainer>
    )
}

const PlayerAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || 'rgba(255, 255, 255, 0.2)'};
  min-width: ${props => props.size ? `${props.size}px` : '60px'};
  max-width: ${props => props.size ? `${props.size}px` : '60px'};
  height: ${props => props.size ? `${props.size}px` : '60px'};
  border-radius: 32%;
  margin: 0 auto;

  @media (max-width: 355px) {
    min-width: ${props => props.size ? props.smSize ? `${props.smSize}px` : `${props.size - 8}px` : '52px'};;
    max-width: ${props => props.size ? props.smSize ? `${props.smSize}px` : `${props.size - 8}px` : '52px'};;
    height: ${props => props.size ? props.smSize ? `${props.smSize}px` : `${props.size - 8}px` : '52px'};;
  }
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
`
