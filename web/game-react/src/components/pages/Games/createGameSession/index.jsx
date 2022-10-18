import React from "react"
import { getAuth, signOut } from "firebase/auth";
import styled from 'styled-components'
import Header from "../../../header";
import {ReactComponent as SignOutIcon} from "../../../../img/icons/log-out-red.svg";
import {ReactComponent as AttachGameIcon} from "../../../../img/icons/attachGame.svg";
import {ReactComponent as AttachIcon} from "../../../../img/icons/folder-plus.svg";
import {ReactComponent as PlusIcon} from "../../../../img/icons/plus.svg";
import ProfileBadge from "../../Profile/profileBadge";
import {ArrowWrapper, SectionHeader} from "../../../../Helpers/UI";
import {colors} from "../../../../Helpers/UI/constants";
import {CustomButton} from "../../../common/CustomButton";
import {PageWrapper} from "../../../common/PageWrapper";
import {useNavigate} from "react-router-dom";
import store from "../../../../store";
import {authUserSuccessAC} from "../../../../store/auth/actions";

export default function CreateGameSession() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            store.dispatch(authUserSuccessAC(null))
            navigate('/')
        }).catch((error) => {
            // An error happened.
            console.log('sign out error .. ', error)
        });
    }

    return (
        <PageWrapper>
            <Header rightIcon={<ArrowWrapper onClick={handleSignOut}><SignOutIcon/></ArrowWrapper>}/>
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
  padding: 50px 16px 24px;
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
  margin-bottom: 30px;
`


export const PlusGameIcon = styled(PlusIcon)`
  position: absolute;
`