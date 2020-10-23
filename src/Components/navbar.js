import React from 'react';
import styled from "@emotion/styled";

const StyledNavBar = styled.nav`
  overflow: hidden;
  background-color: #000000;
  position: fixed; 
  top: 0;
  width: 100%; 
  height: 95px;
  text-align: center;
    `;

const StyledA = styled.a`
  text-decoration: none;
  color: #FFFFFF;
  font-size: 4em;
  font-family: Sansita Swashed;
`;

export default function Navbar() {
    return (
        <StyledNavBar name="top">
            <StyledA href="#top">Cooking Buddy</StyledA>
        </StyledNavBar>
    )
}