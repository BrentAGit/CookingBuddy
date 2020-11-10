import React from 'react';
import styled from "@emotion/styled";
import catData from "../../Data/data";
import SearchCategory from "./searchcategories";

const StyledNavBar = styled.nav`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: fixed; 
  top: 0;
  width: 100%; 
  height: 95px;
  text-align: center;
  transition: top 0.2s;
    `;

const StyledA = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-size: 4em;
  font-family: Sansita Swashed;
`;

export function Navbar() {
    let prevScrollpos = window.pageYOffset; // Make navbar retract when scrolling down | found on internet
     window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = `-${currentScrollPos}px`;
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div>
        <StyledNavBar id="navbar" name="top">
            <StyledA href="#top">Cooking Buddy</StyledA>
        </StyledNavBar>
        <SearchCategory categories={catData}/>
        </div>
    )
}