import React from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";
import {Link} from "react-router-dom";

export function CustomButton({buttonText, icon, handleFunction, transparent, fullWidth, link, customClassname, value}) {

    return (
        <Button onClick={handleFunction} transparent={transparent} fullWidth={fullWidth} className={customClassname} value={value}>
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
  background-color:  ${colors.yellow};
  box-shadow: ${props => props.transparent ? '' : `1px 3px 0 1px ${colors.orange}`};
  width:${props => props.fullWidth ? (props.transparent ? 'calc(100% + 2px)' : '100%') : ''};
  height: ${props => props.transparent ? '44px' : '48px'};
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Overpass', sans-serif;
  font-weight: 600;
  color: ${props => props.transparent ? colors.white : colors.blue};
  font-size: 18px;
  padding: 0 12px;
  margin-top: 18px;
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