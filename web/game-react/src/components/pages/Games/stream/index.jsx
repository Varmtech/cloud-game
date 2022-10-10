import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {
    gameIsReadyToPlaySelector, gameShareLinkSelector, playersListSelector,
} from "../../../../store/games/selectors";
import {colors} from "../../../../Helpers/UI/constants";
import useScript from "../../../../hooks/useScript";
import {LoadingContainer} from "../../../../Helpers/UI";
import {setGameIsReadyToPlayAC} from "../../../../store/games/actions";
import {event, QUIT_GAME, KEY_RELEASED} from "../../../../js/event/event";
import {KEY} from "../../../../js/input/keys";
import {CustomButton} from "../../../common/CustomButton";
import {
    logsJoySelector,
    logsOsSelector,
    logsSelector
} from "../../../../store/games/selectors";
import PlayerAvatar from "../playerAvatar";


export default function GameStream({userData, isGuest}) {
    useScript('controller.js');
    useScript('init.js');

    const joyLogs = useSelector(logsJoySelector);
    const logs = useSelector(logsSelector);
    const osLog = useSelector(logsOsSelector);
    const gameIsReadyToPlay = useSelector(gameIsReadyToPlaySelector);
    const gameShareLink = useSelector(gameShareLinkSelector);
    const playersList = useSelector(playersListSelector);
    const dispatch = useDispatch()
    const screen = window;
    const [isLandscapeMode, setIsLandscapeMode] = useState(screen.innerHeight < screen.innerWidth);
    const [shareMode, setShareMode] = useState(true);
/*    const [gamersList, setGamersList] = useState([{id: 'gamer1', name: 'User 1', host: true, avatarUrl: avatarUrl1},
        {id: 'gamer2', name: 'User2', host: false, avatarUrl: avatarUrl2},
        {id: 'gamer3', name: 'User3', host: false, avatarUrl: avatarUrl3},
        {id: 'gamer4', name: 'User4', host: false, avatarUrl: avatarUrl4},
    ])*/

    const [shareErrorMessage, setShareErrorMessage] = useState('')
    // const [shareLink, setShareLink] = useState("https://1up.games")
    const handleInviteFriend = () => {
        if(navigator.share) {
            navigator.share({ title: "Example Page", url: gameShareLink })
                .then(() => {
                    console.log(' .. shared successfully .. ', )
                })
                .catch(error => {
                    console.log('error on share .. ', error)
                })
        } else {
            console.log("Web share is currently not supported on this browser. Please provide a callback");
            setShareErrorMessage('Share link copied to the clipboard')
            setTimeout(() => {
                setShareErrorMessage('')
            }, 3000)
            handleShareLink()
            // setShareErrorMessage(`Your system doesn't support sharing. You can share game by link: ${gameShareLink}`)
        }
    }

    const handleDetectScreen = () => {
        setIsLandscapeMode(screen.innerHeight < screen.innerWidth)
    };

    const handleShareLink = () => {
        event.pub(KEY_RELEASED, { key: KEY.JOIN });
    };

    useEffect(() => {
        window.addEventListener("resize", handleDetectScreen);
        return () => {
            window.removeEventListener("resize", null)
            dispatch(setGameIsReadyToPlayAC(false))
            event.pub(QUIT_GAME);
        }
    }, [])

    return (
        <>
            { !gameIsReadyToPlay  && <Loading> <span/> </Loading>}
            <VideoWrapper id='stream_container'>
                <StreamContainer>
                     {logs.length ? <LogContainer>
               Keys press log
               {logs.map((log, index) => <div key={log.key+index}>{log.key}</div>)}
           </LogContainer>: ''}
           {joyLogs.length ?  <LogJoyContainer>
               OS- {osLog} -
               Joystick logs
               {joyLogs.map((log, index) => <div key={log.key+index}>{log}</div>)}
           </LogJoyContainer> : ''}
                    <PlayersSection>
                        <GamerItem>
                            {playersList[0] ? (
                                <>
                                    <PlayerAvatar player={playersList[0]} size={88} />
                                    <PlayerName>{playersList[0].display_name}</PlayerName>
                                </>
                            ) : (
                                <NoPlayer />
                            )}
                        </GamerItem>
                        <PlayersSeparator/>
                        <GamerItem>
                            {playersList[2] ? (
                                <>
                                    <PlayerAvatar player={playersList[2]} size={88} />
                                    <PlayerName>{playersList[2].display_name}</PlayerName>
                                </>
                            ) : (
                                <NoPlayer />
                            )}
                        </GamerItem>
                    </PlayersSection>
                    {shareMode && (
                        <ShareContainer>
                            <CustomButton buttonText='Invite friends' handleFunction={handleInviteFriend} transparent/>
                            <CustomButton buttonText='Play' handleFunction={() => setShareMode(false)}/>
                            <ErrorMessage>{shareErrorMessage}</ErrorMessage>
                        </ShareContainer>)
                    }
                    <GameVideo isLandscapeMode={isLandscapeMode} id="stream" className="game-screen" hidden muted playsInline preload="none" />
                    <PlayersSection leftSide={true}>
                        <GamerItem>
                            {playersList[1] ? (
                                <>
                                    <PlayerAvatar player={playersList[1]} size={88} />
                                    <PlayerName>{playersList[1].display_name}</PlayerName>
                                </>
                            ) : (
                                <NoPlayer />
                            )}
                        </GamerItem>
                        <PlayersSeparator/>
                        <GamerItem>
                            {playersList[3] ? (
                                <>
                                    <PlayerAvatar player={playersList[3]} size={88} />
                                    <PlayerName>{playersList[3].display_name}</PlayerName>
                                </>
                            ) : (
                                <NoPlayer />
                            )}
                        </GamerItem>
                    </PlayersSection>
                </StreamContainer>
            </VideoWrapper>
        </>
    )
}

export const ShareContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
  z-index: 99;
  
  & > button {
    margin-right: 6px;
    margin-left: 6px;
    width: 130px;
    height: 48px;
  }
`
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
export const NoPlayer = styled.div`
  width: 88px;
  height: 88px;
  background: #E6D8BF;
  opacity: 0.3;
  border-radius: 16px;
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
  /* ${props => props.leftSide ? 'padding-left: 14px;' : 'padding-right: 14px;'} */
  padding: 0 12px;
  margin: 0 auto;
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

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 0;
  max-width: 500px;
  padding: 22px;
  color: #fff;
`

const LogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-height: 300px;
  width: 120px;
  overflow-y: auto;
  z-index: 999;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const LogJoyContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-height: 300px;
  width: 120px;
  overflow-y: auto;
  z-index: 999;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`