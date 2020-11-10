import React from 'react';
import styled from "@emotion/styled";
import {RecipeInformationImage} from './recipeInformationImage.js'
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

const StyledInformation = styled.div`
  font-size: 1.5em;
  font-family: Sansita Swashed;
  text-align: center;
  padding-top: 110px;
`

export function RecipeInfoInformation(props)  {

    const {showRecipeInfo} = useActiveRecipeInfoContext();
    const {info} =  props;

    return(
        <div>
            <StyledInformation>
                {info}
            </StyledInformation>
            <RecipeInformationImage img={showRecipeInfo.img}/>
        </div>
    )
}