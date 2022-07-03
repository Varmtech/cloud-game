import styled from "styled-components";
import {colors} from "./constants";

export const ArrowWrapper = styled.div`
  width: 30px;
  padding-top: 0;
  position: static;
  cursor: pointer;
`

export const PageContainer = styled.div`
  max-width: 570px;
  min-height: calc(100vh - 92px);
  margin: auto;
  padding: 46px 16px;
  //height: calc(100% - 92px);
  //background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.blue};
`

export const SectionHeader = styled.h2`
  font-family: Overpass, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  margin: 0;
  color: ${props => props.color ? props.color : colors.white};
  ${props => props.center ? 'text-align: center;' : ''}
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
`