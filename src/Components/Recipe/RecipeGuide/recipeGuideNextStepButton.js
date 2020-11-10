import React from 'react';
import styled from "@emotion/styled";

const StyledNextStepButton = styled.div`
display: block;
float: right;
padding-top: 4%;
margin-right: 10px; 
`

const StyledNextStepButtonText = styled.div`
font-size: 3em;
color: ${(props) => props.theme.colors.primaryWhite};
&:hover {
      background-color: ${(props) => props.theme.colors.primaryDark2}; 
`

export function RecipeGuideNextStepButton() {
    return (
        <StyledNextStepButton>
            <StyledNextStepButtonText>
                ⇨
            </StyledNextStepButtonText>
        </StyledNextStepButton>
    )
}