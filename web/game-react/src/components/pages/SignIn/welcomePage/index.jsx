import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components'
import LogoImage from '../../../../img/logo.png';
import {CustomButton} from "../../../common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../../../img/icons/google.svg';
import {colors} from "../../../../Helpers/UI/constants";
import {PageWrapper} from "../../../common/PageWrapper";
import {authUserAC} from "../../../../store/auth/actions";
import { useNavigate } from "react-router-dom";
import useDidUpdate from "../../../../hooks/useDidUpdate";
import {LoadingContainer} from "../../../../Helpers/UI";
import {authUserFailedSelector, userDataSelector} from "../../../../store/auth/selectors";
import {setActiveGameAC} from "../../../../store/games/actions";
import {activeGameSelector} from "../../../../store/games/selectors";

export default function WelcomePage({inviteUrl}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(userDataSelector);
    const userAuthFailed = useSelector(authUserFailedSelector);
    const activeGameName = useSelector(activeGameSelector)
    const [loading, setLoading] = useState(false);
    const [guestMode, setGuestMode] = useState(false);
    const elHeight = window.innerHeight
    const usersWhitelist = ['scottygammon@gmail.com', 'armmkrtchyan07@gmail.com', 'voipam@gmail.com']
    const handleSingIn = () => {
        dispatch(authUserAC());
    }

    useDidUpdate(() => {
        if(userData) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                if (usersWhitelist.includes(userData.email)) {
                    if (inviteUrl) {
                        const activeGame = decodeURIComponent(inviteUrl).split('___')[1]
                        if(activeGame) {
                            dispatch(setActiveGameAC({name: activeGame}))
                        }
                    } else {
                        navigate("/createGameSession");
                    }
                } else {
                    setGuestMode(true)
                }
            }, 500)
        }
    }, [userData])

    useEffect(() => {
        if (userAuthFailed && inviteUrl) {
            navigate("/settings/chooseAvatarAndNickname");
        }
    }, [userAuthFailed])

    useEffect(() => {
        if (activeGameName && inviteUrl) {
            navigate(inviteUrl);
        }
    }, [activeGameName])
    return (
        <PageWrapper backgroundColor={colors.blue} minHeigth={elHeight} alignVertCenter>
            { loading && <LoadingContainer> <span/> </LoadingContainer>}
            <PageContainer guestMode={guestMode}>
                <Logo src={LogoImage}/>
                <WelcomeText>Welcome</WelcomeText>
                <SignInText>{guestMode
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam arcu aliquet amet.'
                    : 'Please sign in to continue'}
                </SignInText>
            </PageContainer>
            {!guestMode && (
                <BottomButton>
                    <CustomButton fullWidth buttonText="Signin with Google" icon={<GoogleIcon/>} handleFunction={handleSingIn} />
                </BottomButton>
            )}
        </PageWrapper>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`

const BottomButton = styled.div`
  position: absolute;
  bottom: 36px;
  left: 16px;
  width: calc(100% - 30px);
`

const Logo = styled.img``

const WelcomeText = styled.h1`
  font-family: 'Overpass', sans-serif;
  margin: 66px 0 10px;
  color: ${colors.white};
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  text-align: center;
  letter-spacing: -0.02em;
`

const SignInText = styled.p`
  font-family: Roboto, sans-serif;
  color: ${colors.white};
  max-width: 210px;
  font-size: 14px;
  line-height: 120%;
  margin: 0;
`
