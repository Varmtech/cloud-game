import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {colors} from "../../Helpers/UI/constants";
import {PageWrapper} from "../Common/PageWrapper";
import {Header} from "../Common/header";
import {ReactComponent as LogOutIcon} from "../../img/icons/log-out.svg";
import {ArrowWrapper} from "../../Helpers/UI";
import {ReactComponent as MoreIcon} from "../../img/icons/more-vertical.svg";
import {ReactComponent as RotateIcon} from "../../img/icons/refresh-cw.svg";
import {ReactComponent as XIcon} from "../../img/icons/x-circle.svg";
import marioImage from "../../img/games/mario.png";
import avatarUrl1 from "../../img/avatar-man.png";
import avatarUrl3 from "../../img/avatar-man2.png";
import avatarUrl2 from "../../img/avatar-m3.png";
import avatarUrl4 from "../../img/avatar-w.png";
import avatarUrl5 from "../../img/avatar-w2.png";
import { PlayerBadge } from "../Game/playerBadge";

export function GameStream() {
    const [gamersList, setGamersList] = useState([])
    const [spectatorsList, setSpectators] = useState([])
    const [rotate, setRotate] = useState(false)

    useEffect(() => {
        console.log('mounted')
        setGamersList([{id: 'gamer1', name: 'MyUser', host: true, avatarUrl: avatarUrl1}, {}, {}, {}])
        setSpectators([
            {id: 'gamer2', name: 'User2', host: false, avatarUrl: avatarUrl2},
            {id: 'gamer3', name: 'User3', host: false, avatarUrl: avatarUrl3},
            {id: 'gamer4', name: 'User4', host: false, avatarUrl: avatarUrl4},
            {id: 'gamer5', name: 'User5', host: false, avatarUrl: avatarUrl5},
            {id: 'gamer6', name: 'User6', host: false, avatarUrl: avatarUrl3}])
    }, [])

    const handleRotate = () => {

        setGamersList([{id: 'gamer1', name: 'MyUser', host: true, avatarUrl: avatarUrl1},
            {id: 'gamer2', name: 'User2', host: false, avatarUrl: avatarUrl2},
            {id: 'gamer3', name: 'User3', host: false, avatarUrl: avatarUrl3},
            {id: 'gamer4', name: 'User4', host: false, avatarUrl: avatarUrl4},
            ])
        setRotate(true)
    }

    return (
        <PageWrapper backgroundColor={colors.charcoal}>
            {rotate ?
                <LandscapeMode>
                    <PlayersSection>
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[0] && gamersList[0].avatarUrl}} size={80}/>
                            <PlayerName>{gamersList[0] && gamersList[0].name === 'MyUser' ? 'You' : gamersList[0] && gamersList[0].name} ({gamersList[0] && gamersList[0].host ? 'Host' : ''})</PlayerName>
                        </GamerItem>
                        <PlayersSeparator />
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[1] && gamersList[0].avatarUrl}} size={80}/>
                            <PlayerName>{gamersList[1] && gamersList[1].name}</PlayerName>
                        </GamerItem>
                    </PlayersSection>
                    <StreamImage src={marioImage} alt=""/>
                    <PlayersSection leftSide={true}>

                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[2] && gamersList[2].avatarUrl}} size={80}/>
                            <PlayerName>{gamersList[2] && gamersList[2].name }</PlayerName>
                        </GamerItem>
                        <PlayersSeparator />
                        <GamerItem>
                            <PlayerBadge player={{avatar: gamersList[3] && gamersList[3].avatarUrl}} size={80}/>
                            <PlayerName>{gamersList[3] && gamersList[3].name}</PlayerName>
                        </GamerItem>
                    </PlayersSection>
                </LandscapeMode>
            :
                <>
                    <Header leftIcon={<ArrowWrapper><LogOutIcon/></ArrowWrapper>}
                            rightIcon={<ArrowWrapper><MoreIcon/></ArrowWrapper>}/>
                    <StreamWrapper>
                        <StreamImage src={marioImage} alt=""/>

                        <StreamLayer>
                            <StreamInfoText>Waiting for friends to join</StreamInfoText>
                        </StreamLayer>
                    </StreamWrapper>

                    <SectionTitle>Gamers</SectionTitle>
                    <GamersSection>
                        {gamersList.map(gamer =>
                            <GamerItem>
                                {gamer.id ?
                                    <>
                                        <PlayerBadge player={{avatar: gamer.avatarUrl}} size={66}/>
                                        <PlayerName>{gamer.name === 'MyUser' ? 'You' : gamer.name} ({gamer.host ? 'Host' : ''})</PlayerName>
                                    </> :
                                    <PlayerEmptyBadge/>
                                }
                            </GamerItem>
                        )}
                    </GamersSection>
                    <SectionTitle>Spectators ({spectatorsList.length})</SectionTitle>
                    <SpectatorSection>
                        {spectatorsList.map((spectator, index) =>
                            index % 4 === 0 ?
                                <>
                                    <Separator/>
                                    <SpectatorItem>
                                        <PlayerBadge player={{avatar: spectator.avatarUrl}} size={66}/>
                                        <PlayerName>{spectator.name}</PlayerName>
                                    </SpectatorItem>
                                </>
                                :
                                <SpectatorItem>
                                    <PlayerBadge player={{avatar: spectator.avatarUrl}} size={66}/>
                                    <PlayerName>{spectator.name}</PlayerName>
                                </SpectatorItem>
                        )}
                    </SpectatorSection>
                </>
            }
            {!rotate &&
            <RotateButtonWrapper onClick={handleRotate}>
                <RotateButton><RotateIcon/> Rotate <XIcon/></RotateButton>
            </RotateButtonWrapper>}
        </PageWrapper>
    )
}

const StreamWrapper = styled.div`
  position: relative;
  margin-left: -16px;
  margin-right: -16px;
`

const StreamImage = styled.img`
  max-width: 100%;
`

const StreamLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

const StreamInfoText = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 22px;
  border-radius: 10px;
  font-family: Overpass, sans-serif;
  color: ${colors.white};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
`

const SectionTitle = styled.h3`
  font-family: Overpass, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${colors.gray};
  margin: 24px 0 14px;
`

const GamersSection = styled.div`
  display: flex;
  justify-content: space-between;
`

const GamerItem = styled.div`
`

const PlayerEmptyBadge = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 38%;
  background-color: ${colors.beige};
  opacity: 0.35;

  @media (max-width: 355px) {
    width: 58px;
    height: 58px;
  }
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

const SpectatorSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SpectatorItem = styled.div`
    margin-bottom: 22px;
`

const Separator = styled.div`
  flex-basis: 100%;
`

const RotateButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const RotateButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid ${colors.white};
  padding: 8px 0;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  color: ${colors.white};
  cursor: pointer;
  
  & > svg {
    margin: 0 10px;
  }
`

const LandscapeMode = styled.div`
  display: flex;
  justify-content: space-between;

  & ${StreamImage} {
    max-width: calc(100% - 188px);
  }
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