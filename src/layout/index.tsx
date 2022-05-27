import React from "react";
import styled from "styled-components";
import { StyledPbContent } from "styles/theme";
import Navigation from "./navigation";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <StyledWrapper>
      <Navigation />
      <StyledContainer>
        <StyledWrapComponent> {children}</StyledWrapComponent>
      </StyledContainer>
    </StyledWrapper>
  )
}


const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media(max-width: ${({ theme }) => theme.rps.sm}) {
    flex-direction: column-reverse;
  }
`;

const StyledContainer = styled(StyledPbContent)`
  flex: 1;
`
const StyledWrapComponent = styled.div`
  flex: 1;
  height: 100%;
`;
export default Layout;