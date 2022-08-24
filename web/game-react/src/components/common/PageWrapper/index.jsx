import React from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";
import {PageContainer} from "../../../Helpers/UI";

export function PageWrapper({backgroundColor, children}) {
    return (
        <Wrapper backgroundColor={backgroundColor}>
            <PageContainer>
                {children}
            </PageContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.blue};
`
