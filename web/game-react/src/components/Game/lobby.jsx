import React, {useState} from "react";
import styled from 'styled-components'
import {Header} from "../Common/header";
import {ReactComponent as SettingsIcon} from "../../img/icons/settings.svg";
import {ReactComponent as ShoppingBagIcon} from "../../img/icons/shopping-bag.svg";
import {ReactComponent as AttachGameIcon} from "../../img/icons/attachGame.svg";
import {ReactComponent as AttachIcon} from "../../img/icons/folder-plus.svg";
import MarioImageSrc from "../../img/games/mario.png";
import SushiCatImageSrc from "../../img/games/sushiCat.png";
import Player1Srs from "../../img/avatar-w.png";
import Player2Srs from "../../img/avatar-m3.png";
import Player3Srs from "../../img/avatar-man2.png";
import {ProfileBadge} from "../Profile/profileBadge";
import {ArrowWrapper, SectionHeader} from "../../Helpers/UI";
import {colors} from "../../Helpers/UI/constants";
import {CustomButton} from "../Common/CustomButton";
import {AttachGameBoard, AttachGameContainer, PlusGameIcon} from "./createGameSession";
import {PlayerBadge} from "./playerBadge";


export function Lobby() {

    return (
        <>
            <Header leftIcon={<ArrowWrapper><ShoppingBagIcon/></ArrowWrapper>}
                    rightIcon={<ArrowWrapper><SettingsIcon/></ArrowWrapper>}/>
            <ProfileBadge/>
            <PrevGameSessions>
                <SectionHeader>Start game session</SectionHeader>
                <GameSessionsCont>
                    <GameSessionItem>
                        <GameImageWrapper>
                            <img src={MarioImageSrc} alt=""/>
                        </GameImageWrapper>
                        <PlayersCont>
                            <PlayerBadge player={{avatar: Player1Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player2Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player3Srs}} size={22} smSize={16}/>
                        </PlayersCont>
                    </GameSessionItem>
                    <GameSessionItem>
                        <GameImageWrapper>
                            <img src={SushiCatImageSrc} alt=""/>
                        </GameImageWrapper>
                        <PlayersCont>
                            <PlayerBadge player={{avatar: Player1Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player2Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player3Srs}} size={22} smSize={16}/>
                        </PlayersCont>
                    </GameSessionItem>
                    <GameSessionItem>
                        <GameImageWrapper>
                            <img src={MarioImageSrc} alt=""/>
                        </GameImageWrapper>
                        <PlayersCont>
                            <PlayerBadge player={{avatar: Player1Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player2Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player3Srs}} size={22} smSize={16}/>
                        </PlayersCont>
                    </GameSessionItem>
                    <GameSessionItem>
                        <GameImageWrapper>
                            <img src={SushiCatImageSrc} alt=""/>
                        </GameImageWrapper>
                        <PlayersCont>
                            <PlayerBadge player={{avatar: Player1Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player2Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player3Srs}} size={22} smSize={16}/>
                        </PlayersCont>
                    </GameSessionItem>
                    <GameSessionItem>
                        <GameImageWrapper>
                            <img src={SushiCatImageSrc} alt=""/>
                        </GameImageWrapper>
                        <PlayersCont>
                            <PlayerBadge player={{avatar: Player1Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player2Srs}} size={22} smSize={16}/>
                            <PlayerBadge player={{avatar: Player3Srs}} size={22} smSize={16}/>
                        </PlayersCont>
                    </GameSessionItem>
                </GameSessionsCont>
            </PrevGameSessions>

            <SectionHeader>Create new game session</SectionHeader>
            <AttachNewGame>
                <AttachNewGameBoard>
                    <AttachGameIcon/>
                    <PlusGameIcon/>
                </AttachNewGameBoard>
                <CustomButton fullWidth buttonText='Attach game' icon={<AttachIcon/>}/>
            </AttachNewGame>
        </>
    )
}

const PrevGameSessions = styled.div`
`

const AttachNewGame = styled(AttachGameContainer)`
  height: auto;
  padding: 26px 16px 32px;
`

const AttachNewGameBoard = styled(AttachGameBoard)`
  width: 200px;
  height: 200px;
  margin-bottom: 14px;
  
`

const GameSessionsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px 16px;
  @media (max-width: 450px) {
    margin: 0 -6px 16px;
  }
`

const GameSessionItem = styled.div`
  width: calc(25% - 32px);
  margin: 8px;
  padding: 8px;
  border-radius: 8px;;
  background-color: ${colors.darkBlue};

  @media (max-width: 500px) {
    width: calc(33% - 23px);
    margin: 6px;
    padding: 6px;
  }
`

const GameImageWrapper = styled.div`
  height: 70px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`

const PlayersCont = styled.div`
  display: flex;
  margin-top: 16px;

  & > div {
    margin-right: 8px;
  }
`
