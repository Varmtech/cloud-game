import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components'
import LogoImage from '../../../../img/logo.png';
import {CustomButton} from "../../../common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../../../img/icons/google.svg';
// import {ReactComponent as Logo} from '../../../../img/icons/primaryLogo.svg';
import {colors} from "../../../../Helpers/UI/constants";
import {PageWrapper} from "../../../common/PageWrapper";
import {auth, signInWithGoogle} from "../../../../service/firebase";
import {GoogleAuthProvider} from "firebase/auth";
import {authUserAC, authUserSuccessAC} from "../../../../store/auth/actions";
import { useNavigate } from "react-router-dom";
import useDidUpdate from "../../../../hooks/useDidUpdate";
import {LoadingContainer} from "../../../../Helpers/UI";
import {userDataSelector} from "../../../../store/auth/selectors";

export default function WelcomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(userDataSelector);
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
                    navigate("/createGameSession");
                } else {
                    setGuestMode(true)
                }
            }, 500)
        }
    }, [userData])

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
