import React from "react";
import styled from 'styled-components'
import LogoImage from '../../img/logo.png';
import {CustomButton} from "../Common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../img/icons/google.svg';
import {colors} from "../../Helpers/UI/constants";

export function WelcomePage() {
    const handleSingIn = () => {
        console.log('... to sign in .... ')
    }
    return (
        <>
            <PageContainer>
                <Logo src={LogoImage}/>
                <WelcomeText>Welcome</WelcomeText>
                <SignInText>Please sign in to continue</SignInText>
            </PageContainer>
            <BottomButton>
                <CustomButton fullWidth buttonText="Signin with Google" icon={<GoogleIcon/>} handleFunction={handleSingIn} />
            </BottomButton>
        </>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 163px);
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
