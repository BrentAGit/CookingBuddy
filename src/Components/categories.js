import React from 'react';
import styled from "@emotion/styled";
import Recipecard from "./recipecard";

const StyledCategory = styled.div`
background-color: #282c34;
width: 100%; 
margin-top: 10vh;
color: #ffffff;
`;

const StyledCatTitle = styled.h1`
text-align: center;
`;

export default function Category(props){

    const {recipes, name} = props

    return(
        <StyledCategory>
            <StyledCatTitle>
                {name}
            </StyledCatTitle>
            {recipes.map(function (recipe, index) {
                return(
                    <Recipecard recipe = {recipe} key = {index} />
                )
            })}
        </StyledCategory>
    )
}