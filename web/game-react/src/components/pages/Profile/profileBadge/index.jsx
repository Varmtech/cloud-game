import React from "react";
import styled from 'styled-components'
import UserAvatarSrc from '../../../../img/avatar-man.png';
import {ReactComponent as NotificationIcon} from '../../../../img/icons/notification.svg';
import {colors} from "../../../../Helpers/UI/constants";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../../../store/auth/selectors";

export default function ProfileBadge() {

    const userData = useSelector(userDataSelector);

    return (
        <BadgeContainer>
            <UserAvatar src={userData.avatarUrl || UserAvatarSrc} />
            <UserInfo>{userData.displayName}</UserInfo>
            <NotificationIconWrapper>
                <NotificationIcon />
            </NotificationIconWrapper>
        </BadgeContainer>
    )
}

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.darkBlue};
  padding: 16px 10px;
  border-radius: 8px;
  margin: 32px 0;
`

const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 15px;
`

const UserInfo = styled.h3`
  width: 100%;
  margin: 0 10px;
  font-family: Overpass, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  letter-spacing: -0.02em;
  color: ${colors.white};
`

const NotificationIconWrapper = styled.span`
  
`
