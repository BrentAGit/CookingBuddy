import React, {useState} from 'react';
import styled from "@emotion/styled";
import RecipeDesc from "./recipedescription";

const StyledRecipeName = styled.h2`
margin-left: 10px;
`;

export default function RecipeCard(props){

    const [isClicked, setIsClicked] = useState(false)

    const {recipe} = props

    return(
        <div onClick={function () {
            setIsClicked(!isClicked)
        }}>
            <StyledRecipeName>
                {recipe.name}
            </StyledRecipeName>
            {isClicked && <RecipeDesc>
                {recipe.description}
            </RecipeDesc>}
        </div>
    )
}