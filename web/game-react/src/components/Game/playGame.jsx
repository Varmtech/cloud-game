import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {colors} from "../../Helpers/UI/constants";
import {PageWrapper} from "../Common/PageWrapper";
import marioImage from "../../img/games/mario.png";
import avatarUrl1 from "../../img/avatar-man.png";
import avatarUrl3 from "../../img/avatar-man2.png";
import avatarUrl2 from "../../img/avatar-m3.png";
import avatarUrl4 from "../../img/avatar-w.png";
import {PlayerBadge} from "./playerBadge";

export function PlayGame() {
    const [gamersList, setGamersList] = useState([{id: 'gamer1', name: 'MyUser', host: true, avatarUrl: avatarUrl1},
        {id: 'gamer2', name: 'User2', host: false, avatarUrl: avatarUrl2},
        {id: 'gamer3', name: 'User3', host: false, avatarUrl: avatarUrl3},
        {id: 'gamer4', name: 'User4', host: false, avatarUrl: avatarUrl4},
    ])

    return (
        <PageWrapper backgroundColor={colors.charcoal}>
            <PageContainer>
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
                <StreamImage src={marioImage} alt=""/>
                <PlayersSection leftSide={true}>
                    <GamerItem>
                        <PlayerBadge player={{avatar: gamersList[2] && gamersList[2].avatarUrl}} size={80}/>
                        <PlayerName>{gamersList[2] && gamersList[2].name}</PlayerName>
                    </GamerItem>
                    <PlayersSeparator/>
                    <GamerItem>
                        <PlayerBadge player={{avatar: gamersList[3] && gamersList[3].avatarUrl}} size={80}/>
                        <PlayerName>{gamersList[3] && gamersList[3].name}</PlayerName>
                    </GamerItem>
                </PlayersSection>
            </PageContainer>
        </PageWrapper>
    )
}

const StreamImage = styled.img`
  max-width: 100%;
`

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & ${StreamImage} {
    max-width: calc(100% - 188px);
  }
`

const GamerItem = styled.div`
`

const PlayerName = styled.h4`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 140%;
  text-align: center;
  color: ${colors.white};
  margin: 6px 0 0;
`


const PlayersSection = styled.div`
  ${props => props.leftSide ? 'padding-left: 14px;' : 'padding-right: 14px;'}
  & ${GamerItem} {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const PlayersSeparator = styled.div`
  border-bottom: 1px solid ${colors.beige};
`