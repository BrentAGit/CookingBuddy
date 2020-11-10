import React from 'react';
import styled from "@emotion/styled";

const StyledRecipeGuideMessage = styled.div`
text-align: center;
font-size: 1.6em;
margin-top: 50px;
color: ${(props) => props.theme.colors.primaryWhite};
`

export function RecipeGuideCurrentMessage() {
    return (
        <StyledRecipeGuideMessage>
            E
        </StyledRecipeGuideMessage>
    )
}