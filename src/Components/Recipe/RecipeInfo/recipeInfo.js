import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";
import {RecipeInfoNav} from "./recipeInfoNav";

const StyledRecipeInfo = styled.div`
  height: 100%; 
  width: 35%; 
  position: fixed;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.darkGrey2}; 
  overflow-x: hidden;
  border-left: 10px solid ${(props) => props.theme.colors.primaryDark};
  border-right: 10px solid ${(props) => props.theme.colors.primaryDark};
`;

const StyledCloseInfoButton = styled.div`
  margin-top: 15px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  font-weight: bold;
  display: table;
`

export default function RecipeInfo() {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();

    return <StyledRecipeInfo>
        <RecipeInfoNav/>
        <StyledCloseInfoButton  onClick={() =>
            setShowRecipeInfo(!showRecipeInfo)}>
            Close
            </StyledCloseInfoButton>
    </StyledRecipeInfo>
}