import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components'
import LogoImage from '../../../../img/logo.png';
import {CustomButton} from "../../../common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../../../img/icons/google.svg';
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
    const handleSingIn = () => {
        dispatch(authUserAC());
    }

    useDidUpdate(() => {
        if(userData) {
            setLoading(true)
            setTimeout(() => {
                navigate("/createGameSession");
            }, 500)
        }
    }, [userData])

    return (
        <PageWrapper backgroundColor={colors.blue} >
            { loading && <LoadingContainer> <span/> </LoadingContainer>}
            <PageContainer>
                <Logo src={LogoImage}/>
                <WelcomeText>Welcome</WelcomeText>
                <SignInText>Please sign in to continue</SignInText>
            </PageContainer>
            <BottomButton>
                <CustomButton fullWidth buttonText="Signin with Google" icon={<GoogleIcon/>} handleFunction={handleSingIn} />
            </BottomButton>
        </PageWrapper>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 163px);
`

const BottomButton = styled.div`
`

const Logo = styled.img`
`

const WelcomeText = styled.h1`
  font-family: 'Overpass', sans-serif;
  margin: 30px 0 10px;
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
  font-size: 14px;
  line-height: 120%;
  margin: 0;
`
