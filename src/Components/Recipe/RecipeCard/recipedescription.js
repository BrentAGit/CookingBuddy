import React from 'react';
import styled from "@emotion/styled";
import RecipeInfo from "../RecipeInfo/recipeInfo";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

const StyledRecipeDescription = styled.div`
margin-left: 10px;
`;

const StyledRecipeButton = styled.div`
margin-top: 15px;
background-color: ${(props) => props.theme.colors.darkGrey};
font-weight: bold;
display: table;
`;

export default function RecipeDesc(props) {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();
    const {isActive} = showRecipeInfo;
    const {ingredients, info, img} = props;
    console.log(info);

    return (
        <StyledRecipeDescription>
            {props.children}
            <StyledRecipeButton onClick={() =>
                setShowRecipeInfo({isActive:!isActive, ingredients:ingredients, info:info, img:img})}>
                Recipe
            </StyledRecipeButton>
            {isActive && <RecipeInfo/>}
        </StyledRecipeDescription>
    )
}