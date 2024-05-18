import styled from "styled-components";
import {colors} from "./constants";

export const ArrowWrapper = styled.div`
  width: 30px;
  padding-top: 0;
  position: static;
  cursor: pointer;
`

export const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 570px;
  //min-height: calc(100vh - 92px);
  padding: 46px 16px;
  //height: calc(100% - 92px);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: ${props => props.alignVertCenter && 'center'};
  //background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.blue};
  
  @media (max-width: 900px) {
    padding: 14px 16px;
  }
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

export const SectionTitle = styled.h3`
  font-family: Overpass, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: ${props => props.color || colors.gray};
  margin: 24px 0 14px;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999999999999;
  background-color: rgba(0, 0, 0, 0.4);

  & > span {
    border: 4px solid ${colors.orange}; /* Light grey */
    border-top: 4px solid rgba(243, 243, 243, 0.61); /* Blue */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`