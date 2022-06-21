import React from "react";
import styled from 'styled-components'
import {ReactComponent as Logo} from '../../img/icons/logo.svg';


export function Header({leftIcon, rightIcon}) {
    return (
        <HeaderContainer>
            <HeaderLeftSide>
                {leftIcon}
            </HeaderLeftSide>
            <Logo/>
            <HeaderRightSide>
                {rightIcon}
            </HeaderRightSide>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`

const HeaderLeftSide = styled.div`
    width: 30px;
  `

const HeaderRightSide = styled.div`
  width: 30px;
  `