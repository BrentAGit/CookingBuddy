import React, {useState} from 'react';
import styled from "@emotion/styled";
import RecipeDesc from "./recipedescription";

const StyledRecipeName = styled.h2`
margin-left: 10px;
`;

export default function RecipeCard(props){

    const [showRecipe, setShowRecipe] = useState(false)

    const {recipe} = props

    return(
        <div onClick={() =>
            setShowRecipe(!showRecipe)
        }>
            <StyledRecipeName>
                {recipe.name}
            </StyledRecipeName>
            {showRecipe && <RecipeDesc>
                {recipe.description}
            </RecipeDesc>}
        </div>
    )
}