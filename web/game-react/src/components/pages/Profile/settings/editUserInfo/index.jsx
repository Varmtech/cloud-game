import React, {useState} from "react";
import styled from 'styled-components'
import {colors} from "../../../../../Helpers/UI/constants";
import {PageWrapper} from "../../../../common/PageWrapper";
import Header from "../../../../header";
import {ArrowWrapper, SectionHeader} from "../../../../../Helpers/UI";
import {ReactComponent as BackIcon} from "../../../../../img/icons/arrow-left.svg";
import {Link} from "react-router-dom";
import Field from "../../../../common/field";

export default function EditUserInfo() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    return (
        <PageWrapper backgroundColor={colors.charcoal}>
            <Header leftIcon={<ArrowWrapper><Link to='../settings'><BackIcon/></Link></ArrowWrapper>} />
            <SectionHeader >Edit user information</SectionHeader>

            <FieldsCont>
                <Field input={{value: userName, type: 'text', placeholder: 'Typing...'}} onChange={(e) => setUserName(e.currentTarget.value)} label='User Name'/>
                <Field input={{value: userEmail, type: 'text', placeholder: 'Typing...'}} onChange={(e) => setUserEmail(e.currentTarget.value)} label='Email address'/>
                <Field input={{value: additionalInfo, type: 'text', placeholder: 'Typing...'}} onChange={(e) => setAdditionalInfo(e.currentTarget.value)} label='Additional info'/>
            </FieldsCont>
        </PageWrapper>
    )
}

const FieldsCont = styled.div`
  margin-top: 24px;
`