import React from 'react';
import styled from "@emotion/styled";
import {RecipeGuideCloseButton} from "./recipeGuideCloseButton";
import {RecipeGuideCurrentStep} from "./recipeGuideCurrentStep";
import {RecipeGuideCurrentMessage} from "./recipeGuideCurrentMessage";
import {RecipeGuideNextStepButton} from "./recipeGuideNextStepButton";
import {RecipeGuidePreviousStepButton} from "./recipeGuidePreviousButton";
import {useActiveRecipeGuideContext} from "../../../Context/activeRecipeGuide_context";

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
  border-top: 10px solid ${(props) => props.theme.colors.primaryDark};
`;

export function RecipeGuide() {

    const {showRecipeGuide} = useActiveRecipeGuideContext();

    return(
        <div>
            <StyledRecipeGuide>
                <RecipeGuideCloseButton/>
                <RecipeGuideCurrentStep guide={showRecipeGuide.guide}/>
                <RecipeGuideCurrentMessage/>
                <div>
                    <RecipeGuideNextStepButton/>
                    <RecipeGuidePreviousStepButton/>
                </div>
            </StyledRecipeGuide>
        </div>
    )
}