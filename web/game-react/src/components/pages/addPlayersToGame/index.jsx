import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";
import {PageWrapper} from "../../common/PageWrapper";
import Header from "../../header";
import {ReactComponent as LogOutIcon} from "../../../img/icons/log-out.svg";
import {ArrowWrapper, SectionTitle} from "../../../Helpers/UI";
import {ReactComponent as MoreIcon} from "../../../img/icons/more-vertical.svg";
import {ReactComponent as RotateIcon} from "../../../img/icons/refresh-cw.svg";
import {ReactComponent as XIcon} from "../../../img/icons/x-circle.svg";
import marioImage from "../../../img/games/mario.png";
import avatarUrl1 from "../../../img/avatar-man.png";
import avatarUrl3 from "../../../img/avatar-man2.png";
import avatarUrl2 from "../../../img/avatar-m3.png";
import avatarUrl4 from "../../../img/avatar-w.png";
import avatarUrl5 from "../../../img/avatar-w2.png";
import {CustomButton} from "../../common/CustomButton";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from "./example";
import GameList from "../Games";
import {Link} from "react-router-dom";
import PlayerAvatar from "../Games/playerAvatar";

export default function AddPlayerToGame() {
    const [gamersList, setGamersList] = useState([])
    const [spectatorsList, setSpectators] = useState([])
    const [rotate, setRotate] = useState(false)

    useEffect(() => {
        console.log('mounted')
        setGamersList([{id: 'gamer1', name: 'MyUser', host: true, avatarUrl: avatarUrl1}, {}, {}, {}])
        setSpectators([
            {id: 'gamer2', name: 'User2', host: false, avatarUrl: avatarUrl2, type: 'player'},
            {id: 'gamer3', name: 'User3', host: false, avatarUrl: avatarUrl3, type: 'player'},
            {id: 'gamer4', name: 'User4', host: false, avatarUrl: avatarUrl4, type: 'player'},
            {id: 'gamer5', name: 'User5', host: false, avatarUrl: avatarUrl5, type: 'player'},
            {id: 'gamer6', name: 'User6', host: false, avatarUrl: avatarUrl3, type: 'player'}])
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

        <DndProvider backend={HTML5Backend}>
            <PageWrapper backgroundColor={colors.charcoal}>
                {rotate ?
                    <LandscapeMode>
                        <PlayersSection>
                            <GamerItem>
                                <PlayerAvatar player={{avatar: gamersList[0] && gamersList[0].avatarUrl}} size={80}/>
                                <PlayerName>{gamersList[0] && gamersList[0].name === 'MyUser' ? 'You' : gamersList[0] && gamersList[0].name} ({gamersList[0] && gamersList[0].host ? 'Host' : ''})</PlayerName>
                            </GamerItem>
                            <PlayersSeparator />
                            <GamerItem>
                                <PlayerAvatar player={{avatar: gamersList[1] && gamersList[0].avatarUrl}} size={80}/>
                                <PlayerName>{gamersList[1] && gamersList[1].name}</PlayerName>
                            </GamerItem>
                        </PlayersSection>
                        {/*<StreamImage src={marioImage} alt=""/>*/}
                        <GameList />
                        <PlayersSection leftSide={true}>

                            <GamerItem>
                                <PlayerAvatar player={{avatar: gamersList[2] && gamersList[2].avatarUrl}} size={80}/>
                                <PlayerName>{gamersList[2] && gamersList[2].name }</PlayerName>
                            </GamerItem>
                            <PlayersSeparator />
                            <GamerItem>
                                <PlayerAvatar player={{avatar: gamersList[3] && gamersList[3].avatarUrl}} size={80}/>
                                <PlayerName>{gamersList[3] && gamersList[3].name}</PlayerName>
                            </GamerItem>
                        </PlayersSection>
                    </LandscapeMode>
                    :
                    <>
                        <Header leftIcon={<Link to='/gameList'><ArrowWrapper><LogOutIcon/></ArrowWrapper></Link>}
                               rightIcon={<ArrowWrapper><MoreIcon/></ArrowWrapper>}/>
                        <StreamWrapper>
                            <StreamImage src={marioImage} alt=""/>

                            <StreamLayer>
                                <CustomButton transparent buttonText='Waiting for friends to join' />
                            </StreamLayer>
                        </StreamWrapper>

                        <SectionTitle>Gamers</SectionTitle>
                        <Example gamersList={gamersList} spectatorsList={spectatorsList}/>

                    </>
                }
                {!rotate &&
                <RotateButtonWrapper onClick={handleRotate}>
                    <RotateButton><RotateIcon/> Rotate <XIcon/></RotateButton>
                </RotateButtonWrapper>}
            </PageWrapper>
        </DndProvider>

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