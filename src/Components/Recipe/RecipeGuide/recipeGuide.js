import React from 'react';
import styled from "@emotion/styled";
import {RecipeGuideCloseButton} from "./recipeGuideCloseButton";

const StyledRecipeGuide = styled.div`
  height: 50%; 
  width: 100%; 
  position: fixed;
  margin-top: 26%;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primaryDark3}; 
  overflow-x: hidden;
  transition: height 2s;
  border-top: 5px solid ${(props) => props.theme.colors.primaryDark};
`;

export function RecipeGuide() {
    return(
        <div>
            <StyledRecipeGuide>
            <RecipeGuideCloseButton/>
            </StyledRecipeGuide>
        </div>
    )
}