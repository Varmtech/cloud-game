import React from "react";
import styled from 'styled-components'
import LogoImage from '../../img/icons/logo.svg';
import {CustomButton} from "../Common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../img/icons/google.svg';
import {colors} from "../../Helpers/UI/constants";

export function ConfirmAccount() {
    const handleConfirm = () => {
        console.log('... confirm account .... ')
    }
    return (
        <>
            <PageContainer>
                <Logo src={LogoImage}/>
                <ConfirmHeader>Confirm your Google account</ConfirmHeader>
                <AccountCont>
                    <UserAvatar/>
                    <UserInfo>
                        <UserName>Trung Kie</UserName>
                        <UserEmail>trungkienspktnd@gmail.com</UserEmail>
                    </UserInfo>
                </AccountCont>
                <ConfirmText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam tortor, vestibulum, semper
                    donec sed ut. Felis id tellus ullamcorper iaculis id vivamus. Mauris malesuada velit nec duis.
                </ConfirmText>
            </PageContainer>
            <BottomButton>
                <CustomButton buttonText="Signin with Google" icon={<GoogleIcon/>} handleFunction={handleConfirm}/>
                <CustomButton buttonText="Change Account" handleFunction={handleConfirm} transparent/>
            </BottomButton>
        </>
    )
}

const PageContainer = styled.div`
  height: calc(100vh - 230px);
`

const BottomButton = styled.div`
`

const Logo = styled.img`
`
const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.orange};
  border-radius: 50%;
  margin-right: 10px;
`
const AccountCont = styled.div`
  display: flex;
  margin-bottom: 30px;
`
const UserInfo = styled.div`
`
const UserName = styled.h3`
  margin: 0 0 3px;
  text-align: left;
  color: ${colors.white};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
`
const UserEmail = styled.h4`
  margin: 0;
  color: ${colors.white};
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  opacity: 0.5;
`

const ConfirmHeader = styled.h1`
  font-family: 'Overpass', sans-serif;
  margin: 30px 0 35px;
  color: ${colors.white};
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  letter-spacing: -0.02em;
`

const ConfirmText = styled.p`
  font-family: Roboto, sans-serif;
  color: ${colors.white};
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  text-align: left;
`
