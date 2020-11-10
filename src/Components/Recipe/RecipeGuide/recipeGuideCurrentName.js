import React, {useState} from 'react';
import styled from "@emotion/styled";
import {ActiveRecipeGuideProvider} from "../../../Context/activeRecipeGuide_context";

const StyledCurrentStep = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-weight: bold;
  margin-top: 15px;
  font-size: 2em;
  font-family: Sansita Swashed;
`

export function RecipeGuideCurrentName(props) {

    const {guide} = props;

    return (
        <StyledCurrentStep>
            {guide.recipeName}
        </StyledCurrentStep>
    )
}