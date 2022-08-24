import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {
    gameIsReadyToPlaySelector,
} from "../../../../store/games/selectors";
import {colors} from "../../../../Helpers/UI/constants";
import useScript from "../../../../hooks/useScript";
import PlayerBadge from "../playerBadge";
import avatarUrl1 from "../../../../img/avatar-man.png";
import avatarUrl2 from "../../../../img/avatar-m3.png";
import avatarUrl3 from "../../../../img/avatar-man2.png";
import avatarUrl4 from "../../../../img/avatar-w.png";
import {LoadingContainer} from "../../../../Helpers/UI";
import {setGameIsReadyToPlayAC} from "../../../../store/games/actions";
import {event, QUIT_GAME} from "../../../../js/event/event";


export default function GameStream() {
    useScript('controller.js');
    useScript('init.js');

    const gameIsReadyToPlay = useSelector(gameIsReadyToPlaySelector);

    const dispatch = useDispatch()
    const screen = window;
    const [isLandscapeMode, setIsLandscapeMode] = useState(screen.innerHeight < screen.innerWidth);
    const [gamersList, setGamersList] = useState([{id: 'gamer1', name: 'MyUser', host: true, avatarUrl: avatarUrl1},
        {id: 'gamer2', name: 'User2', host: false, avatarUrl: avatarUrl2},
        {id: 'gamer3', name: 'User3', host: false, avatarUrl: avatarUrl3},
        {id: 'gamer4', name: 'User4', host: false, avatarUrl: avatarUrl4},
    ])

    const handleDetectScreen = () => {
        setIsLandscapeMode(screen.innerHeight < screen.innerWidth)
    };

    useEffect(() => {
        return () => {
            dispatch(setGameIsReadyToPlayAC(false))
            event.pub(QUIT_GAME);
        }
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleDetectScreen);
        return () => {
            window.removeEventListener("resize", null)
        }
    }, [])

    return (
        <>
            { !gameIsReadyToPlay  && <Loading> <span/> </Loading>}
            <VideoWrapper id='stream_container'>
                <StreamContainer>
                    <PlayersSection>
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[0] && gamersList[0].avatarUrl}} size={80}/>
                            <PlayerName>{gamersList[0] && gamersList[0].name === 'MyUser' ? 'You' : gamersList[0] && gamersList[0].name} ({gamersList[0] && gamersList[0].host ? 'Host' : ''})</PlayerName>
                        </GamerItem>
                        <PlayersSeparator/>
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[1] && gamersList[0].avatarUrl}} size={80}/>
                            <PlayerName>{gamersList[1] && gamersList[1].name}</PlayerName>
                        </GamerItem>
                    </PlayersSection>
                    <GameVideo isLandscapeMode={isLandscapeMode} id="stream" className="game-screen" hidden muted playsInline preload="none" />
                    <PlayersSection leftSide={true}>
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[2] && gamersList[2].avatarUrl}} size={80} />
                            <PlayerName>{gamersList[2] && gamersList[2].name}</PlayerName>
                        </GamerItem>
                        <PlayersSeparator/>
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[3] && gamersList[3].avatarUrl}} size={80} />
                            <PlayerName>{gamersList[3] && gamersList[3].name}</PlayerName>
                        </GamerItem>
                    </PlayersSection>
                </StreamContainer>
            </VideoWrapper>
        </>
    )
}

export const VideoWrapper = styled.div`
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${colors.charcoal};
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 999999999;
  
  &.show {
    display: flex;
  }
`
export const GameVideo = styled.video`
  position: static;
  //width: calc(100vw - 188px);
  //height: calc((100vw - 188px) * 3 / 4);
  //max-height: 100vh;
  max-height: 100vh;
  max-width: calc(100vw - 200px);
  height: ${props => props.isLandscapeMode ? '100vh' : '260px'};
  @media (min-width: 500px) {
    //width: 350px;
  }
  z-index: 9;
  top: 0;
`
export const StreamContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
export const GamerItem = styled.div`
`
export const PlayerName = styled.h4`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;
  text-align: center;
  color: ${colors.white};
  margin: 6px 0 0;
`
export const PlayersSection = styled.div`
  ${props => props.leftSide ? 'padding-left: 14px;' : 'padding-right: 14px;'}
  display: flex;
  flex-direction: column;
  height: 100%;
  & ${GamerItem} {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const PlayersSeparator = styled.div`
  border-bottom: 1px solid ${colors.beige};
`

const Loading = styled(LoadingContainer)`
  background-color: ${colors.charcoal};
`