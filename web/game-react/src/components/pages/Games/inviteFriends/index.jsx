import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Header from "../../../header";
import {ReactComponent as SettingsIcon} from "../../../../img/icons/settings.svg";
import {ReactComponent as BackIcon} from "../../../../img/icons/arrow-left.svg";
import {ReactComponent as PlayIcon} from "../../../../img/icons/play.svg";
import {ArrowWrapper, ButtonWrapper, SectionHeader} from "../../../../Helpers/UI";
import {colors} from "../../../../Helpers/UI/constants";
import {CustomButton} from "../../../common/CustomButton";
import {PageWrapper} from "../../../common/PageWrapper";
import {useSelector} from "react-redux";
import {activeGameSelector, gameListSelector} from "../../../../store/games/selectors";
import {useNavigate} from "react-router-dom";
import {ErrorMessage} from "../createGameSession";

export default function InviteFriends() {
    const navigate = useNavigate();
    const selectedGame = useSelector(activeGameSelector);
    const [shareErrorMessage, setShareErrorMessage] = useState('')
    const [shareLink, setShareLink] = useState("https://1up.games")

    const handleInviteFriend = () => {
        if(navigator.share) {
            navigator.share({ title: "Example Page", url: shareLink })
                .then(() => {
                    console.log(' .. shared successfully .. ', )
                })
                .catch(error => {
                    console.log('error on share .. ', error)
                })
        } else {
            console.log("Web share is currently not supported on this browser. Please provide a callback");
            setShareErrorMessage("Your system doesn't support sharing")
        }
    }
    const onBackButtonEvent = (e) => {
        navigate('/gameList')
        window.onpopstate = () => {}
    }
    useEffect(() => {
        window.onpopstate = onBackButtonEvent
    }, [])

    return (
        <PageWrapper>
            <Header leftIcon={<ArrowWrapper onClick={() => navigate(-1)}><BackIcon/></ArrowWrapper>}
                   rightIcon={<ArrowWrapper><SettingsIcon/></ArrowWrapper>}/>
            <GameSessionContainer>
                <SectionHeader>Game session created</SectionHeader>
                <AttachedGameCont>
                    <AttachedGameImg src={selectedGame.wallpaper}/>
                </AttachedGameCont>
                <GameName>{selectedGame.name}</GameName>

                <ButtonWrapper >

                    <ErrorMessage>{shareErrorMessage}</ErrorMessage>
                    <CustomButton fullWidth buttonText='Invite friends' handleFunction={handleInviteFriend} />
                    <CustomButton handleFunction={() => navigate('/playGame')} fullWidth buttonText='I’m ready' icon={<PlayIcon/>} transparent/>
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
  min-height: calc(100vh - 222px);
  overflow-y: auto;
  
  @media (max-width: 900px) {
    padding: 20px 16px;
    margin-top: 12px;
  }
`

const AttachedGameCont = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 28px;
  margin-top: 44px;
  @media (max-width: 900px) {
    margin-bottom: 12px;
    margin-top: 20px;
  }
`

const GameName = styled.h3`
  margin: 0 0 5px;
  font-family: Overpass, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${colors.white}
`

const AttachedGameImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`
