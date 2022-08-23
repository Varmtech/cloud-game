import React from "react";
import styled from 'styled-components'
import Header from "../../../header";
import {ReactComponent as SettingsIcon} from "../../../../img/icons/settings.svg";
import {ReactComponent as BackIcon} from "../../../../img/icons/arrow-left.svg";
import {ReactComponent as AttachGameIcon} from "../../../../img/icons/attachGame.svg";
import {ReactComponent as AttachIcon} from "../../../../img/icons/folder-plus.svg";
import {ReactComponent as PlusIcon} from "../../../../img/icons/plus.svg";
import ProfileBadge from "../../Profile/profileBadge";
import {ArrowWrapper, SectionHeader} from "../../../../Helpers/UI";
import {colors} from "../../../../Helpers/UI/constants";
import {CustomButton} from "../../../common/CustomButton";
import {PageWrapper} from "../../../common/PageWrapper";

export default function CreateGameSession() {

    return (
        <PageWrapper>
            <Header leftIcon={<ArrowWrapper><BackIcon/></ArrowWrapper>}
                   rightIcon={<ArrowWrapper><SettingsIcon/></ArrowWrapper>}/>
            <ProfileBadge/>
            <SectionHeader>Create game session</SectionHeader>
            <AttachGameContainer>
                <AttachGameBoard>
                    <AttachGameIcon/>
                    <PlusGameIcon/>
                </AttachGameBoard>
                <CustomButton link='/gameList' fullWidth buttonText='Attach game' icon={<AttachIcon/>}/>
            </AttachGameContainer>
        </PageWrapper>
    )
}

export const AttachGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkBlue};
  padding: 60px 16px 24px;
  margin-top: 16px;
  border-radius: 8px;
  flex-flow: column wrap;
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
  margin-bottom: 40px;
`


export const PlusGameIcon = styled(PlusIcon)`
  position: absolute;
`

export const ErrorMessage = styled.p`
  color: #fff;
  font-size: 12px;
  margin: 22px 0 -10px;
`
