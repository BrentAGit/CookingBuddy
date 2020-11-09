import React, {useState} from 'react';
import styled from "@emotion/styled";
import RecipeDesc from "./recipedescription";

const StyledRecipeName = styled.h2`
margin-left: 17px;
`;

const StyledDiv = styled.div`
padding-bottom: 10px;
padding-top: 5px;
}
&:hover {
        background-color: ${(props) => props.theme.colors.primaryDark2};
`

export default function RecipeCard(props) {

    const [showRecipe, setShowRecipe] = useState(false)

    const {recipe} = props

    return (
        <StyledDiv>
            <div  onClick={() =>
                setShowRecipe(!showRecipe)
            }>
                <StyledRecipeName>
                    {recipe.name}
                </StyledRecipeName>
            </div>
            {showRecipe && <RecipeDesc ingredients={recipe.ingredients} info={recipe.info} img={recipe.img}>
                {recipe.description}
            </RecipeDesc>}
        </StyledDiv>
    )
}