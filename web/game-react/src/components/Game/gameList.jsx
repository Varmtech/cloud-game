import React, {useState} from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {
    activeGameIndexSelector,
    gameIsStarted,
    gameListSelector, logsJoySelector,
    logsOsSelector,
    logsSelector
} from "../../store/games/selectors";
import {ReactComponent as CheckIcon} from '../../img/icons/check-square.svg';
import MarioImage from "../../img/games/mario.png";
import SampleDemobyFlorianImage from "../../img/games/sample-demo-florian.png";
import SushiTheCat from "../../img/games/sushiCat.png";
import Anguna from "../../img/games/anguna.png";
import {setActiveGameIndexAC} from "../../store/games/actions";
import {Header} from "../Common/header";
import {ReactComponent as ArrowLeft} from "../../img/icons/arrow-left.svg";
import {PageContainer} from "../../Helpers/UI";
import {PageWrapper} from "../Common/PageWrapper";
import {colors} from "../../Helpers/UI/constants";
import useScript from "../../hooks/useScript";
import {Arrows} from "../OldView/arrows";
import {Screen} from "../screen";
import {GuideText} from "../OldView/guideText";
import {PlayersSlider} from "../OldView/playersSlider";
import {HolderButtons} from "../OldView/holderButtons";


export function GameList() {
    useScript('gui/gui.js');
    useScript('utils.js');
    useScript('gui/message.js');
    useScript('log.js');
    useScript('event/event.js');
    useScript('network/socket.js');
    useScript('input/keys.js');
    useScript('settings/opts.js');
    useScript('settings/settings.js');
    useScript('env.js');
    useScript('input/input.js');
    useScript('gameList.js');
    useScript('stream/stream.js');
    useScript('room.js');
    useScript('network/ajax.js');
    useScript('network/rtcp.js');
    useScript('workerManager.js');
    useScript('recording.js');
    useScript('stats/stats.js');
    useScript('controller.js');
    useScript('input/keyboard.js');
    useScript('input/touch.js');
    useScript('input/joystick.js');
    useScript('init.js');

    const dispatch = useDispatch();
    const gamesList = useSelector(gameListSelector) || [];
    const logs = useSelector(logsSelector) || [];
    const osLog = useSelector(logsOsSelector) || '';
    const joyLogs = useSelector(logsJoySelector) || [];
    const selectedGameIndex = useSelector(activeGameIndexSelector);
    const gameStarted = useSelector(gameIsStarted);
    console.log('osLog .. .', osLog)
    console.log('logs .. .', logs)
    const gameImages = {
        0: SampleDemobyFlorianImage,
        1: MarioImage,
        2: SushiTheCat,
        3: Anguna
    }

    const setGameImageUrl = (gameIndex) => gameImages[gameIndex]

    const handleSetSelectedGameIndex = (gameIndex) => {
        dispatch(setActiveGameIndexAC(gameIndex))
        // setGameIndex(gameIndex)
    }
    const handleContinue = () => {
        console.log('continue to start game ------- ', gameImages[selectedGameIndex])
    }
    return (
       <PageWrapper backgroundColor={colors.blue}>
           <Header leftIcon={<ArrowWrapper className='btn' value="quit"><ArrowLeft/></ArrowWrapper>}/>
           {logs.length ? <LogContainer>
               Keys press log
               {logs.map(log => <div>{log.key}</div>)}
           </LogContainer>: ''}
           {joyLogs.length ?  <LogJoyContainer>
               {osLog}
               Joystick logs
               {joyLogs.map(log => <div>{log}</div>)}
           </LogJoyContainer> : ''}
           <GamesContainer>
               <GamesList>
                   {gamesList.map((game, index) =>
                       <GameItem key={game} onClick={() => handleSetSelectedGameIndex(index)} gameIsSelected={selectedGameIndex}
                                 isSelected={selectedGameIndex === index}>
                           <GameItemImg data-index={index} src={setGameImageUrl(index)} alt={game} className='game_image'/>
                       </GameItem>)}
               </GamesList>

               <VideoWrapper>
                   <GameVideo id="stream" className="game-screen" hidden muted playsInline preload="none"/>
               </VideoWrapper>
               <GameStartButtonWrapper>
                   <GameContinueButton onClick={handleContinue} className='btn' value="start"> <CheckIcon/> <span>Continue</span> </GameContinueButton>
               </GameStartButtonWrapper>
           </GamesContainer>

           <GamesOldContainer>
               <div id="gamebody">
                   <Arrows/>

                   <Screen/>

                   <div id="servers"/>

                   <GuideText/>

                   <div id="btn-load" className="btn big unselectable" value="load"/>
                   <div id="btn-save" className="btn big unselectable" value="save"/>
                   <div id="btn-join" className="btn big unselectable" value="join"/>

                   <PlayersSlider/>

                   <div id="btn-quit" className="btn big unselectable" value="quit"/>
                   <div id="btn-select" className="btn big unselectable" value="select"/>
                   <div id="btn-start" className="btn big unselectable" value="start"/>

                   <HolderButtons/>

                   <div id="btn-settings" className="btn unselectable" value="settings"/>

                   TODO: remove
                   <input id="room-txt" type="text" placeholder="room id..." className=" unselectable" disabled/>

                   <label className="dpad-toggle-label" title="D-pad toggle">
                       <input type="checkbox" id="dpad-toggle" checked/>
                       <span className="dpad-toggle-slider"/>
                   </label>

                   <div id="noti-box" className="unselectable">Oh my god</div>

                   <div id="help-overlay" className="hidden">
                       <div id="help-overlay-background"/>
                       <div id="help-overlay-detail"/>
                   </div>
                   <div id="btn-help" className="btn unselectable" value="help"/>
               </div>

               <div id="app-settings" className="modal-window">
                   <div>
                       <div className="settings__controls">
                           <span title="Save" id="settings__controls__save" className="semi-button">↑</span>
                           <span title="Load" id="settings__controls__load" className="semi-button">↓</span>
                           <span title="Reset" id="settings__controls__reset" className="semi-button">⟲</span>
                           <span title="Close" id="settings__controls__close" className="semi-button">X</span>
                       </div>
                       <h1>Options</h1>
                       <div id="settings-data"/>
                       <div>
                           * -- applied after application restart
                       </div>
                   </div>
               </div>

               <div className="source">
                   <span id="v">69ff8ae</span>
                   <a rel="noopener noreferrer" target="_blank" href="https://github.com/giongto35/cloud-game">
                       Source code on GitHub
                   </a>
               </div>

           </GamesOldContainer>
       </PageWrapper>
    )
}

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

const GamesOldContainer = styled.div`
  display: none;
  position: relative;
  height: 100vh;
  width: 50vw;
`
const ArrowWrapper = styled.div`
  width: 30px;
  padding-top: 0;
  position: static;
  cursor: pointer;
  `

const GamesContainer = styled.div`
  position: relative;
  margin: -7px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 154px);
`

const GamesList = styled.div`
  display: flex;
  justify-content: center;
`
const GameItem = styled.div`
  width: 100%;
  margin: 7px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.5
  ${(props) => props.isSelected && `opacity: 1`}
`
const GameItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const GameStartButtonWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 54px;
`

const GameContinueButton = styled.button`
  display: flex;
  position: static;
  align-items: center;
  justify-content: center;
  background-color: #FDAC00;
  border: none;
  width: 100%;
  height: 44px;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Overpass', sans-serif;
  font-weight: 600;
  color: #013094;
  font-size: 18px;
  padding-top: 0;
  & > span {
    transform: translate(0,2px);
  }
  & > svg {
    margin-right: 10px;
  }
`
const VideoWrapper = styled.div`
`

const GameVideo = styled.video`
  height: calc(100% - 52px);
  z-index: 9;
  top: 0;
`
