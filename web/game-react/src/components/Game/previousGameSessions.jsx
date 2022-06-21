import React, {useState} from "react";
import styled from 'styled-components'
import {Header} from "../Common/header";
import {ReactComponent as BackIcon} from "../../img/icons/arrow-left.svg";
import {ProfileBadge} from "../Profile/profileBadge";
import {ArrowWrapper, ButtonWrapper, PageHeader} from "../../Helpers/UI";
import {colors} from "../../Helpers/UI/constants";
import MarioImageSrc from "../../img/games/mario.png";
import SushiCatImageSrc from "../../img/games/sushiCat.png";
import ManAvatarSrc from "../../img/avatar-m3.png";
import WomanAvatarSrc from "../../img/avatar-w.png";
import Woman2AvatarSrc from "../../img/avatar-w2.png";
import {PlayerBadge} from "./playerBadge";
import {CustomButton} from "../Common/CustomButton";
import {ReactComponent as PlayCircleIcon} from "../../img/icons/play-circle.svg";


export function PreviousGameSessions() {

    return (
        <PageContainer>
            <Header leftIcon={<ArrowWrapper><BackIcon/></ArrowWrapper>}/>

            <PageHeader>Previous game sessions</PageHeader>
            <GameSessionsContainer>
                <GameSessionItem>
                    <GameImageCont>
                        <img src={MarioImageSrc} alt=""/>
                    </GameImageCont>
                    <GameInfo>
                        <GameName>Super Mario</GameName>
                        <SessionDate>15 May 2022</SessionDate>

                        <SessionPlayers>
                            <PlayerBadge player={{avatar: ManAvatarSrc}} size={32}/>
                            <PlayerBadge player={{avatar: WomanAvatarSrc}} size={32}/>
                            <PlayerBadge player={{avatar: Woman2AvatarSrc}} size={32}/>
                        </SessionPlayers>
                    </GameInfo>
                </GameSessionItem>
                <GameSessionItem>
                    <GameImageCont>
                        <img src={SushiCatImageSrc} alt=""/>
                    </GameImageCont>
                    <GameInfo>
                        <GameName>Sushi Cat</GameName>
                        <SessionDate>14 May 2022</SessionDate>

                        <SessionPlayers>
                            <PlayerBadge player={{avatar: ManAvatarSrc}} size={32}/>
                            <PlayerBadge player={{avatar: WomanAvatarSrc}} size={32}/>
                            <PlayerBadge player={{avatar: Woman2AvatarSrc}} size={32}/>
                        </SessionPlayers>
                    </GameInfo>
                </GameSessionItem>
                <GameSessionItem>
                    <GameImageCont>
                        <img src={SushiCatImageSrc} alt=""/>
                    </GameImageCont>
                    <GameInfo>
                        <GameName>Sushi Cat</GameName>
                        <SessionDate>10 May 2022</SessionDate>

                        <SessionPlayers>
                            <PlayerBadge player={{avatar: ManAvatarSrc}} size={32}/>
                            <PlayerBadge player={{avatar: WomanAvatarSrc}} size={32}/>
                            <PlayerBadge player={{avatar: Woman2AvatarSrc}} size={32}/>
                        </SessionPlayers>
                    </GameInfo>
                </GameSessionItem>
            </GameSessionsContainer>

            <ButtonWrapper>
                <CustomButton buttonText='Restart session' icon={<PlayCircleIcon/>} />
            </ButtonWrapper>
        </PageContainer>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const GameSessionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: calc(100vh - 272px);
  overflow-y: scroll;
`

const GameSessionItem = styled.div`
  display: flex;
  background-color: ${colors.darkBlue};
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
`

const GameImageCont = styled.div`
  width: 114px;
  min-width: 114px;
  height: 114px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`

const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 16px;
`

const GameName = styled.h3`
  margin: 0 0 4px;
  font-family: Overpass, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${colors.white};
`

const SessionDate = styled.h3`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;
  color: ${colors.gray};
`

const SessionPlayers = styled.div`
  display: flex;
  margin-top: auto;
  
  & > div {
    margin-right: 8px;
  }
`
