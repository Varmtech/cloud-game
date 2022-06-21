import React from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";

export function CustomButton({buttonText, icon, handleFunction, transparent}) {

    return (
        <Button onClick={handleFunction} transparent={transparent}>
            <ButtonContent>
                {icon && icon}
                {buttonText}
            </ButtonContent>
        </Button>
    )
}

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  background-color:  ${colors.yellow};
  box-shadow: ${props => props.transparent ? '' : `1px 3px 0 1px ${colors.orange}`};
  width:${props => props.transparent ? 'calc(100% + 2px)' : '100%'};
  height: ${props => props.transparent ? '44px' : '48px'};
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Overpass', sans-serif;
  font-weight: 600;
  color: ${props => props.transparent ? colors.white : colors.blue};
  font-size: 18px;
  padding-top: 0;
  margin-top: 18px;
  & > span {
    transform: translate(0,2px);
    & > svg {
      margin-right: 10px;
    }
  }
  ${(props) => props.transparent && `
    background-color: rgba(255,255,255,0.2);
  `}
`

const ButtonContent = styled.span`
  display: flex;
  
`