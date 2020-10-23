import React from 'react';
import styled from "@emotion/styled";

const StyledRecipeDescription = styled.div`
margin-left: 10px;
`;

export default function RecipeDesc(props) {
    return (
        <StyledRecipeDescription>
            {props.children}
        </StyledRecipeDescription>
    )
}