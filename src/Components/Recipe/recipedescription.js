import React, {useState} from 'react';
import styled from "@emotion/styled";
import RecipeInfo from "./recipeInfo";
import {useActiveRecipeInfoContext} from "../../Context/activeRecipeInfo_context";

const StyledRecipeDescription = styled.div`
margin-left: 10px;
`;

const StyledRecipeButton = styled.div`
margin-top: 15px;
background-color: ${(props) => props.theme.colors.orange};
font-weight: bold;
display: table;
`;

export default function RecipeDesc(props) {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();

    return (
        <StyledRecipeDescription>
            {props.children}
            <StyledRecipeButton onClick={() =>
                setShowRecipeInfo}>
                Recipe
            </StyledRecipeButton>
            {showRecipeInfo && <RecipeInfo/>}
        </StyledRecipeDescription>
    )
}