import React, {useState} from 'react';
import styled from "@emotion/styled";
import RecipeDesc from "./recipedescription";

const StyledRecipeName = styled.h2`
margin-left: 10px;
`;

export default function RecipeCard(props) {

    const [showRecipe, setShowRecipe] = useState(false)

    const {recipe} = props

    return (
        <div>
            <div onClick={() =>
                setShowRecipe(!showRecipe)
            }>
                <StyledRecipeName>
                    {recipe.name}
                </StyledRecipeName>
            </div>
            {showRecipe && <RecipeDesc ingredients={recipe.ingredients} info={recipe.info} img={recipe.img}>
                {recipe.description}
            </RecipeDesc>}
        </div>
    )
}