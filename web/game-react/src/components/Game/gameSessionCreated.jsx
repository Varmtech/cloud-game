import React from "react";
import styled from 'styled-components'
import {Header} from "../Common/header";
import {ReactComponent as SettingsIcon} from "../../img/icons/settings.svg";
import {ReactComponent as LogOutIcon} from "../../img/icons/log-out-red.svg";
import {ReactComponent as PlayIcon} from "../../img/icons/play.svg";
import GameImageSrc from "../../img/games/mario.png";
import AvatarUrl from "../../img/avatar-man2.png";
import {ArrowWrapper, ButtonWrapper, SectionHeader} from "../../Helpers/UI";
import {colors} from "../../Helpers/UI/constants";
import {CustomButton} from "../Common/CustomButton";
import {PlayerBadge} from "./playerBadge";
import {PageWrapper} from "../Common/PageWrapper";

export function GameSessionCreated() {

    return (
        <PageWrapper>
            <Header leftIcon={<ArrowWrapper><LogOutIcon/></ArrowWrapper>}
                    rightIcon={<ArrowWrapper><SettingsIcon/></ArrowWrapper>}/>
            <GameSessionContainer>
                <SectionHeader>Game session created</SectionHeader>
                <AttachedGameCont>
                    <AttachedGameImg src={GameImageSrc}/>
                </AttachedGameCont>
                <GameName>Super Mario</GameName>
                <PlayersCount>4 players</PlayersCount>
                <PlayersWrapper>
                    <PlayerBadge player={{avatar: AvatarUrl}} size={60}/>
                    <PlayerBadge player={{}} size={60}/>
                    <PlayerBadge player={{}} size={60}/>
                    <PlayerBadge player={{}} size={60}/>
                    <PlayersJoinNotification>Waiting for players to join</PlayersJoinNotification>
                </PlayersWrapper>
                <ButtonWrapper>
                    <CustomButton buttonText='I’m ready' icon={<PlayIcon/>}/>
                </ButtonWrapper>
            </GameSessionContainer>
        </PageWrapper>
    )
}

const GameSessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkBlue};
  padding: 30px 16px 24px;
  margin-top: 16px;
  height: calc(100vh - 222px);
`

const AttachedGameCont = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 34px;
  margin-top: 64px;
`

const GameName = styled.h3`
  margin: 0 0 5px;
  font-family: Overpass, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${colors.white}
`

const PlayersCount = styled.p`
  margin: 0 0 38px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 120%;
  color: ${colors.gray}
`

const AttachedGameImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`

const PlayersJoinNotification = styled.p`
  margin: 8px 0 0;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  line-height: 140%;
  color: ${colors.yellow};
  width: 100%;
`
const PlayersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
  
  & > div {
    margin: 0 10px;
    
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }

    @media (max-width: 400px) {
      margin: 0 6px;
    }
  }
`

