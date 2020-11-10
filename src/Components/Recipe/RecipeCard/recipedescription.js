import React from 'react';
import styled from "@emotion/styled";
import {RecipeInfo} from "../RecipeInfo/recipeInfo";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";
import {useActiveRecipeGuideContext} from "../../../Context/activeRecipeGuide_context";

const StyledRecipeDescription = styled.div`
  margin-left: 35px;
`;

const StyledRecipeButton = styled.div`
  margin-top: 15px;
  font-weight: bold;
  display: table;
`;

export default function RecipeDesc(props) {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();
    const {showRecipeGuide, setShowRecipeGuide} = useActiveRecipeGuideContext()
    const {isActive} = showRecipeInfo;
    const {ingredients, info, img, id, guide} = props;

    return (
        <StyledRecipeDescription>
            {props.children}
            <StyledRecipeButton onClick={() => {
                setShowRecipeGuide({...showRecipeGuide, guide:guide})
                setShowRecipeInfo({isActive:!isActive, ingredients:ingredients, info:info, img:img, id:id})}}>
                ⇨ Recipe ⇦
            </StyledRecipeButton>
            {isActive && <RecipeInfo/>}
        </StyledRecipeDescription>
    )
}