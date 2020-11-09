import React from 'react';
import styled from "@emotion/styled";
import Recipecard from "../Recipe/recipecard";

const StyledCategory = styled.div`
background-color: ${(props) => props.theme.colors.darkGrey};
width: 100%; 
margin-top: 10vh;
color: ${(props) => props.theme.colors.primaryWhite};
padding-bottom: 7px;
`;

const StyledCatTitle = styled.h1`
text-align: center;
padding-top: 10px;
`;

export default function Category(props) {

    const {recipes, name} = props

    return (
        <StyledCategory>
            <StyledCatTitle>
                {name}
            </StyledCatTitle>
            {recipes.map((recipe) =>{
                return (
                    <Recipecard recipe={recipe}/>
                )
            })}
        </StyledCategory>
    )
}