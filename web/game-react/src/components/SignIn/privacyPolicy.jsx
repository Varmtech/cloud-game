import React from "react";
import styled from 'styled-components'
import LogoImage from '../../img/icons/logo.svg';
import {CustomButton} from "../Common/CustomButton";
import {ReactComponent as GoogleIcon} from '../../img/icons/google.svg';
import {colors} from "../../Helpers/UI/constants";
import {Header} from "../Common/header";

export function PrivacyPolicy() {
    const handleConfirm = () => {
        console.log('... confirm account .... ')
    }
    return (
        <>
            <PageContainer>
                <Header/>
                {/*<Logo src={LogoImage}/>*/}
                <ConfirmHeader>Read our privacy policy and terms of service</ConfirmHeader>

                <ConfirmText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sit tristique non
                    faucibus ultrices turpis nulla vitae quis. Tellus elit diam augue non neque dictum. Tempus sit
                    parturient eget neque. Elit sed rutrum vestibulum sagittis nisl, tincidunt. Enim congue ac, luctus
                    dolor eu quis. Iaculis aliquam laoreet nisi, eu, platea nec. At justo, morbi in urna laoreet eget
                    amet, aliquam. Tincidunt eros suscipit tempus hac convallis id. Maecenas adipiscing metus, sit lorem
                    nam aliquet ipsum. At nunc in lacus, sagittis. Imperdiet tortor lectus nec orci quis aliquam proin
                    consequat. Proin amet quam non volutpat integer bibendum volutpat. Cursus quis neque neque,
                    phasellus diam lorem. Fusce id aliquet at et imperdiet at aliquet. Etiam sit eu et fames luctus id
                    mauris. Feugiat etiam auctor cras sagittis facilisi egestas maecenas. Consequat at est, sit egestas
                    arcu. Sagittis, elementum leo suscipit mollis facilisis dolor malesuada diam scelerisque. Vestibulum
                    pellentesque urna id volutpat etiam nisl ornare. Aliquet non sollicitudin malesuada interdum enim.
                    Blandit turpis semper aliquet quis faucibus in tincidunt amet. Urna morbi dictum odio aenean
                    tristique fusce non, facilisis facilisis. Tincidunt maecenas mauris facilisi felis metus. Eget urna
                    mauris egestas lorem lorem.
                    Duis faucibus et viverra sollicitudin justo id. Maecenas sed neque, porttitor nibh ullamcorper nunc
                    tellus. Adipiscing nisi tristique sagittis sit sed. Tristique lectus nullam mauris non. Enim
                    pulvinar rhoncus pulvinar amet. Eu feugiat vitae consequat sed felis tellus tempor non commodo.
                    Scelerisque convallis quis sit proin. Fringilla parturient non malesuada bibendum sed. Ut donec
                    etiam eu leo sit. Tortor mauris quam hendrerit sed dui elit, convallis fermentum sem. Euismod orci a
                    sit suspendisse in gravida sit ultricies eleifend. Etiam pellentesque nec hendrerit morbi eget
                    molestie faucibus bibendum morbi. Mi massa tempor in aliquam aliquam eget in. Lectus integer donec
                    fermentum sit. Nunc ac magna suspendisse erat enim.
                </ConfirmText>
            </PageContainer>
            <BottomButton>
                <CustomButton buttonText="Confirm" handleFunction={handleConfirm}/>
            </BottomButton>
        </>
    )
}

const PageContainer = styled.div`
  position: relative;
  height: calc(100vh - 162px);
`

const BottomButton = styled.div`
`

const Logo = styled.img`
`

const ConfirmHeader = styled.h1`
  max-width: 245px;
  margin: 30px auto 35px;
  color: ${colors.white};
  font-family: 'Overpass', sans-serif;
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
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  padding-right: 10px;
  margin-right: -10px;
  max-height: calc(100% - 177px);
  overflow-x: auto;
  
  &::after {
  content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 90px;
    background: linear-gradient(360deg,#013094 -5%,rgba(24,66,154,0) 100%);
  }
`
