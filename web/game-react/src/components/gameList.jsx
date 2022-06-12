import React, {useState} from "react";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {activeGameIndexSelector, gameListSelector} from "../store/games/selectors";
import {ReactComponent as CheckIcon} from '../img/check-square.svg';
import MarioImage from "../img/games/mario.png";
import SampleDemobyFlorianImage from "../img/games/sample-demo-florian.png";
import SushiTheCat from "../img/games/sushiCat.png";
import Anguna from "../img/games/anguna.png";
import {setActiveGameIndexAC} from "../store/games/actions";


export function GameList() {
    const dispatch = useDispatch();
    const gamesList = useSelector(gameListSelector) || [];
    const selectedGameIndex = useSelector(activeGameIndexSelector);

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
    )
}

const GamesContainer = styled.div`
  position: relative;
  margin: -7px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 24px);
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
