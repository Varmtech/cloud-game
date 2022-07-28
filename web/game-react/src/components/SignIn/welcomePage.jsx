import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components'
import LogoImage from '../../img/logo.png';
import {CustomButton} from "../Common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../img/icons/google.svg';
import {colors} from "../../Helpers/UI/constants";
import {PageWrapper} from "../Common/PageWrapper";
import {auth, signInWithGoogle} from "../../service/firebase";
import {GoogleAuthProvider} from "firebase/auth";
import {authUserAC} from "../../store/auth/actions";

export function WelcomePage() {
    const dispatch = useDispatch();

    const handleSingIn = () => {
        auth.onAuthStateChanged(function(user) {
            if (user) {
                console.log('user is logged in. .. ', user)
                dispatch(authUserAC(user))
                // User is signed in
                // Show them the authenticated content...
            } else {
                console.log('no user ,,, ')
                // No user is signed in
                // Let's sign them in
                signInWithGoogle()
                    .then((result) => {
                        console.log('result .. ', result)

                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        localStorage.setItem('access_token', credential.accessToken)

                        console.log('credential .. ', credential)

                        dispatch(authUserAC(result.user))
                        /*       const token = credential.accessToken;
                           // The signed-in user info.
                           const user = result.user;
                           // ...*/
                    }).catch((error) => {
                    console.log('error .. ', error)
                    /*    // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...*/
                });
            }
        });

    }
    return (
        <PageWrapper backgroundColor={colors.blue} >
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
