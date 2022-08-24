import React from "react";
import styled from 'styled-components'
import {ReactComponent as Logo} from '../../img/icons/logo.svg';
import {ReactComponent as ColoredLogo} from '../../img/icons/logo-colored.svg';


export default function Header({leftIcon, rightIcon, coloredLogo, marginBottom}) {
    return (
        <HeaderContainer marginBottom={marginBottom}>
            <HeaderLeftSide>
                {leftIcon}
            </HeaderLeftSide>
            {coloredLogo ? <ColoredLogo/> : <Logo/>}
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
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '32px'};

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`

const HeaderLeftSide = styled.div`
    width: 30px;
  `

const HeaderRightSide = styled.div`
  width: 30px;
  `