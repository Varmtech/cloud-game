import React from "react";
import styled from 'styled-components'
import {ReactComponent as Logo} from '../img/logo.svg';
import {ReactComponent as ArrowLeft} from '../img/arrow-left.svg';


export function Header() {
    return (
        <HeaderContainer>
            <HeaderLeftSide>
                <ArrowWrapper className='btn' value="quit"><ArrowLeft/></ArrowWrapper>
            </HeaderLeftSide>
            <Logo/>
            <HeaderRightSide/>
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
const ArrowWrapper = styled.div`
  width: 30px;
  padding-top: 0;
  position: static;
  cursor: pointer;
  `
