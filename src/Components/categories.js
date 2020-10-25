import React from 'react';
import styled from "@emotion/styled";
import Recipecard from "./recipecard";

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

    const {recipes, name, id} = props

    return (
        <StyledCategory id={name}>
            <StyledCatTitle>
                {name}
            </StyledCatTitle>
            {recipes.map(function (recipe, index) {
                return (
                    <Recipecard recipe={recipe} key={index}/>
                )
            })}
        </StyledCategory>
    )
}