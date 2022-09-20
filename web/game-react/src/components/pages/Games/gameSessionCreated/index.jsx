import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import styled from 'styled-components'
import Header from "../../../header";
import {ReactComponent as SettingsIcon} from "../../../../img/icons/settings.svg";
import {ReactComponent as LogOutIcon} from "../../../../img/icons/log-out-red.svg";
import GameImageSrc from "../../../../img/games/mario.png";
import AvatarUrl from "../../../../img/avatar-man2.png";
import {ArrowWrapper, ButtonWrapper, SectionHeader} from "../../../../Helpers/UI";
import {colors} from "../../../../Helpers/UI/constants";
import PlayerBadge from "../playerBadge";
import {PageWrapper} from "../../../common/PageWrapper";
import {useSelector} from "react-redux";
import {GameContinueButton} from "../index";
import {ReactComponent as CheckIcon} from "../../../../img/icons/check-square.svg";
import {activeGameSelector} from "../../../../store/games/selectors";

export default function GameSessionCreated() {
    const navigate = useNavigate();

    const selectedGame = useSelector(activeGameSelector);

    useEffect(() => {
        if(!selectedGame) {
            navigate('/');
        }
    }, [])

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
                    <GameContinueButton className='btn' value='start'> <CheckIcon/> <span>I’m ready</span> </GameContinueButton>
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
  margin-bottom: 28px;
  margin-top: 44px;
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

