import React, {useState} from 'react';
import styled from "@emotion/styled";

const StyledRecipeGuideMessage = styled.div`
  text-align: center;
  font-size: 1.2em;
  margin-top: 50px;
  color: ${(props) => props.theme.colors.primaryWhite};
`

export function RecipeGuideCurrentMessage(props) {

    const {guide} = props;

    return (
        <StyledRecipeGuideMessage>
            {guide.message}
        </StyledRecipeGuideMessage>
    )
}