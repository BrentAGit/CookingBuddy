import React from 'react';
import styled from "@emotion/styled";

const StyledInfoNavBar = styled.div`
background-color:  ${(props) => props.theme.colors.darkGrey};
display: flex;
justify-content: space-around;
text-align: center;
position: fixed; 
top: 0;
width: 35%; 
height: 95px;
text-align: center;
`;

const StyledNavCatText = styled.div`
text-decoration: none;
color: ${(props) => props.theme.colors.primaryWhite};
font-size: 2.5em;
font-family: Sansita Swashed;
padding-top: 10px;
`

export function RecipeInfoNav() {
    return(
        <StyledInfoNavBar>
            <StyledNavCatText>Info</StyledNavCatText>
            <StyledNavCatText>Ingredients</StyledNavCatText>
        </StyledInfoNavBar>
    )
}