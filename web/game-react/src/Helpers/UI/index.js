import styled from "styled-components";
import {colors} from "./constants";

export const ArrowWrapper = styled.div`
  width: 30px;
  padding-top: 0;
  position: static;
  cursor: pointer;
`

export const PageHeader = styled.h1`
  font-family: Overpass, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.02em;
  margin: 0;
  color: ${colors.white};
`
export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
`