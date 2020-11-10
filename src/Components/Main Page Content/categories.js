import React from 'react';
import styled from "@emotion/styled";
import Recipecard from "../Recipe/RecipeCard/recipecard";

const StyledCategory = styled.div`
background-color: ${(props) => props.theme.colors.darkGrey};
width: 100%; 
margin-top: 10vh;
color: ${(props) => props.theme.colors.primaryWhite};
padding-bottom: 7px;
border-top: 5px solid ${(props) => props.theme.colors.primaryDark};
border-bottom: 5px solid ${(props) => props.theme.colors.primaryDark};
`;

const StyledCatTitle = styled.h1`
text-align: center;
font-family: Sansita Swashed;
`;

export default function Category(props) {

    const {recipes, name} = props

    return (
        <StyledCategory  id={name}>
            <StyledCatTitle>
                {name}
            </StyledCatTitle>
            {recipes.map((recipe, index) =>{
                return (
                    <Recipecard recipe={recipe} key={index}/>
                )
            })}
        </StyledCategory>
    )
}