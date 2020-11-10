import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeGuideContext} from "../../../Context/activeRecipeGuide_context";

const StyledCloseGuideButton = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  float: right;
  margin-right: 3px; 
  &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark2};
`

const StyledCloseGuideButtonText = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 12px;
  color: ${(props) => props.theme.colors.primaryWhite};
`

export function RecipeGuideCloseButton() {

    const {showRecipeGuide, setShowRecipeGuide} = useActiveRecipeGuideContext();

    return(
        <StyledCloseGuideButton onClick={() =>
            setShowRecipeGuide({...showRecipeGuide, isGuideActive: false})}>
            <StyledCloseGuideButtonText>
                X
            </StyledCloseGuideButtonText>
        </StyledCloseGuideButton>
    )
}