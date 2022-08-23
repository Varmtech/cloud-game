import React, { useState } from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {
    activeGameIndexSelector,
    logsJoySelector,
    logsOsSelector,
    logsSelector
} from "../../../store/games/selectors";
import {ReactComponent as CheckIcon} from '../../../img/icons/check-square.svg';
import MarioImage from "../../../img/games/mario.png";
import SampleDemobyFlorianImage from "../../../img/games/sample-demo-florian.png";
import SushiTheCat from "../../../img/games/sushiCat.png";
import Anguna from "../../../img/games/anguna.png";
import {setActiveGameIndexAC} from "../../../store/games/actions";
import Header from "../../header";
import {ReactComponent as ArrowLeft} from "../../../img/icons/arrow-left.svg";
import {PageWrapper} from "../../common/PageWrapper";
import {colors} from "../../../Helpers/UI/constants";
import {useNavigate} from "react-router-dom";

export default function GameList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logs = useSelector(logsSelector) || [];
    const osLog = useSelector(logsOsSelector) || '';
    const joyLogs = useSelector(logsJoySelector) || [];
    const selectedGameIndex = useSelector(activeGameIndexSelector);
    const [gamesList, setGamesList] = useState([{id: '0', name: 'Sample Demo by Florian (PD)', host: true, image: SampleDemobyFlorianImage},
        {id: '1', name: 'Super Mario Bros', host: false, image: MarioImage},
        {id: '2', name: 'Sushi The Cat', host: false, image: SushiTheCat},
        {id: '3', name: 'Anguna', host: false, image: Anguna},
    ])

    const handleSetSelectedGameIndex = (gameIndex) => {
        dispatch(setActiveGameIndexAC(gameIndex))
    }

    const handleContinue = () => {
        navigate('/inviteFriends')
    }

    return (
       <PageWrapper backgroundColor={colors.blue}>
           <Header leftIcon={<ArrowWrapper onClick={() => {navigate('/createGameSession')}}><ArrowLeft/></ArrowWrapper>}/>
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
                       <GameItem key={game.id} onClick={() => handleSetSelectedGameIndex(index)} gameIsSelected={selectedGameIndex}
                                 isSelected={selectedGameIndex === index}>
                           <GameItemImg data-index={index} src={game.image} alt={game.name}/>
                       </GameItem>)}
               </GamesList>
               <GameStartButtonWrapper>
                   <GameContinueButton onClick={handleContinue} > <CheckIcon/> <span>Continue</span> </GameContinueButton>
               </GameStartButtonWrapper>
           </GamesContainer>
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
export const GamesOldContainer = styled.div`
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
export const GameContinueButton = styled.button`
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

export const GamerItem = styled.div`
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