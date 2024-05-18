import React from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";
import {Link} from "react-router-dom";

export function CustomButton({buttonText, icon, handleFunction, transparent, fullWidth, link, customClassname, value, disabled = false}) {

    return (
        <Button onClick={handleFunction} transparent={transparent} fullWidth={fullWidth} className={customClassname} value={value} disabled={disabled}>
            {link
                ? <Link to={link}>
                    <ButtonContent>
                        {icon && icon}
                        {buttonText}
                    </ButtonContent>
                </Link> :

                <ButtonContent>
                    {icon && icon}
                    {buttonText}
                </ButtonContent>
            }
        </Button>
    )
}

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: none;
  background-color:  ${props => props.disabled ? "#E5D8BF" : colors.yellow};
  box-shadow: ${props => props.transparent || props.disabled ? '' : `1px 3px 0 1px ${colors.orange}`};
  width:${props => props.fullWidth ? (props.transparent ? 'calc(100% + 2px)' : '100%') : ''};
  height: ${props => props.transparent ? '44px' : '48px'};
  border-radius: 10px;
  font-family: 'Overpass', sans-serif;
  font-weight: 600;
  color: ${props => props.disabled ? '#8E8E93' : props.transparent ? colors.white : colors.blue};
  font-size: 18px;
  padding: 0 12px;
  margin-top: 18px;
  cursor:  ${props => props.disabled ? 'inherit' : 'pointer'};
  & > span {
    transform: translate(0,2px);
    & > svg {
      margin-right: 10px;
    }
  }
  
  > a {
    transform: translate(0,2px);
    color: inherit;
    text-decoration: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    & > span > svg {
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