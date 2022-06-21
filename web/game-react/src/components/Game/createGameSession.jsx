import React, {useState} from "react";
import styled from 'styled-components'
import {Header} from "../Common/header";
import {ReactComponent as SettingsIcon} from "../../img/icons/settings.svg";
import {ReactComponent as ShoppingBagIcon} from "../../img/icons/shopping-bag.svg";
import {ReactComponent as AttachGameIcon} from "../../img/icons/attachGame.svg";
import {ReactComponent as AttachIcon} from "../../img/icons/folder-plus.svg";
import {ReactComponent as PlusIcon} from "../../img/icons/plus.svg";
import {ProfileBadge} from "../Profile/profileBadge";
import {ArrowWrapper, PageHeader} from "../../Helpers/UI";
import {colors} from "../../Helpers/UI/constants";
import {CustomButton} from "../Common/CustomButton";


export function CreateGameSession() {

    return (
        <>
            <Header leftIcon={<ArrowWrapper><ShoppingBagIcon/></ArrowWrapper>}
                    rightIcon={<ArrowWrapper><SettingsIcon/></ArrowWrapper>}/>
            <ProfileBadge/>
            <PageHeader>Create game session</PageHeader>
            <AttachGameContainer>
                <AttachGameBoard>
                    <AttachGameIcon/>
                    <PlusGameIcon/>
                </AttachGameBoard>
                <CustomButton buttonText='Attach game' icon={<AttachIcon/>} />
            </AttachGameContainer>
        </>
    )
}

export const AttachGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkBlue};
  padding: 66px 16px 24px;
  margin-top: 16px;
  height: calc(100vh - 418px);
  border-radius: 8px;
`

export const AttachGameBoard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 260px;
  border: 1px dashed ${colors.white};
  border-radius: 50%;
  margin-bottom: 80px;
`


export const PlusGameIcon = styled(PlusIcon)`
  position: absolute;
`
