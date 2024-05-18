import React from "react";
import styled from 'styled-components'
import {ReactComponent as ArrowRight} from '../../../../img/icons/chevron-right.svg';
import {colors} from "../../../../Helpers/UI/constants";
import {PageWrapper} from "../../../common/PageWrapper";
import Header from "../../../header";
import {ArrowWrapper, SectionHeader, SectionTitle} from "../../../../Helpers/UI";
import {ReactComponent as BackIcon} from "../../../../img/icons/arrow-left.svg";
import {ReactComponent as LogoutIcon} from "../../../../img/icons/log-out-red.svg";
import {Link} from "react-router-dom";

export default function Settings() {

    return (
        <PageWrapper backgroundColor={colors.charcoal}>
            <Header leftIcon={<ArrowWrapper><BackIcon/></ArrowWrapper>}
                   rightIcon={<ArrowWrapper><LogoutIcon/></ArrowWrapper>}/>
            <SectionHeader>Settings</SectionHeader>
            <SectionTitle>Account</SectionTitle>

            <SettingsList>
                <SettingsListItem><Link to="./editUserInfo"><span>Edit User Information</span> <ArrowRight/></Link></SettingsListItem>
                <SettingsListItem><Link to="./payment"><span>Payment</span> <ArrowRight/></Link></SettingsListItem>
                <SettingsListItem><Link to="./submitGame"><span>Submit Game</span> <ArrowRight/></Link></SettingsListItem>
                <SettingsListItem><Link to="./gameSubmissionStatus"><span>Game Submission Status</span> <ArrowRight/></Link></SettingsListItem>
            </SettingsList>
        </PageWrapper>
    )
}

const SettingsList = styled.ul`
  list-style: none;
  padding-left: 0;
`
const SettingsListItem = styled.li`
  height: 56px;
  background-color: ${colors.gray2};
  margin-bottom: 8px;
  padding: 0 16px;
  border-radius: 4px;
  
  & > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: ${colors.white};
    text-decoration: none;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    line-height: 120%;
  }
`
