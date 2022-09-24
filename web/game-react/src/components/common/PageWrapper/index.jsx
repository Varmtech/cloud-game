import React from "react";
import styled from 'styled-components'
import {colors} from "../../../Helpers/UI/constants";
import {PageContainer} from "../../../Helpers/UI";

export function PageWrapper({backgroundColor, children, alignVertCenter}) {
    return (
        <Wrapper backgroundColor={backgroundColor}>
            <PageContainer alignVertCenter={alignVertCenter}>
                {children}
            </PageContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  //min-height: 100vh;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.blue};
`
