import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeGuideContext} from "../../../Context/activeRecipeGuide_context";

const StyledCurrentStep = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryWhite};
  font-weight: bold;
  margin-top: 15px;
  font-size: 2em;
  font-family: Sansita Swashed;
`

export function RecipeGuideCurrentStep(props) {

    const {showRecipeGuide} = useActiveRecipeGuideContext();
    const {guide} = props;
    console.log(guide)
    console.log(showRecipeGuide.guide)
    console.log(props)

    return (
        <StyledCurrentStep>
            {guide}
        </StyledCurrentStep>
    )
}