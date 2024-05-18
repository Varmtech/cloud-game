import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Header from "../../../header";
import {ReactComponent as BackIcon} from "../../../../img/icons/arrow-left.svg";
import {ReactComponent as PlayIcon} from "../../../../img/icons/play.svg";
import {ArrowWrapper, ButtonWrapper, SectionHeader} from "../../../../Helpers/UI";
import {colors} from "../../../../Helpers/UI/constants";
import {CustomButton} from "../../../common/CustomButton";
import {PageWrapper} from "../../../common/PageWrapper";
import {useSelector} from "react-redux";
import {activeGameSelector} from "../../../../store/games/selectors";
import {useNavigate} from "react-router-dom";

export default function InviteFriends() {
    const navigate = useNavigate();
    const selectedGame = useSelector(activeGameSelector);
    const onBackButtonEvent = (e) => {
        navigate('/gameList')
        window.onpopstate = () => {}
    }
    useEffect(() => {
        window.onpopstate = onBackButtonEvent
    }, [])

    return (
        <PageWrapper>
            <Header leftIcon={<ArrowWrapper onClick={() => navigate(-1)}><BackIcon/></ArrowWrapper>} />
            <GameSessionContainer>
                <SectionHeader>Game session created</SectionHeader>
                <AttachedGameCont>
                    <AttachedGameImg src={selectedGame.wallpaper}/>
                </AttachedGameCont>
                <GameName>{selectedGame.name}</GameName>

                <ButtonWrapper>
                    {/*<CustomButton fullWidth buttonText='Invite friends' handleFunction={handleInviteFriend} />*/}
                    <CustomButton handleFunction={() => navigate('/playGame')} fullWidth buttonText='I’m ready' icon={<PlayIcon/>} />
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
  height: 100%;
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
