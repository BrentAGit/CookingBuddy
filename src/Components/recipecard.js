import React, {useState} from 'react';
import styled from "@emotion/styled";
import RecipeDesc from "./recipedescription";

export default function RecipeCard(props){

    const [isClicked, changeClicked] = useState(false)

    const {recipe} = props

    return(
        <div onClick={function () {
            changeClicked(!isClicked)
        }}>
            <h2>
                {recipe.name}
            </h2>
            {isClicked && <RecipeDesc>
                {recipe.description}
            </RecipeDesc>}
        </div>
    )
}