import React from 'react';
import styled from "@emotion/styled";
import {RecipeCloseButton} from "./recipeCloseButton";
import {RecipeInfoNav} from "./recipeInfoNav";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";
import {RecipeStartRecipeButton} from "./recipeInfoStartRecipeButton";
import {RecipeInfoBody} from "./recipeInfoBody";

const StyledRecipeInfo = styled.div`
  height: 100%; 
  width: 35%; 
  position: fixed;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primaryDark3}; 
  overflow-x: hidden;
  border-right: 10px solid ${(props) => props.theme.colors.primaryDark};
  transition: width 2s;
`;

export default function RecipeInfo() {

    const {showRecipeInfo} = useActiveRecipeInfoContext();

    return(
        <StyledRecipeInfo>
            <RecipeInfoNav ingredients={showRecipeInfo.ingredients} info={showRecipeInfo.info} img={showRecipeInfo.img}/>
            <RecipeInfoBody/>
            <RecipeCloseButton/>
            <RecipeStartRecipeButton/>
        </StyledRecipeInfo>)
}