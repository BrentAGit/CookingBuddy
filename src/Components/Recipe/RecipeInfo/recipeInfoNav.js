import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoInformationContext} from "../../../Context/activeRecipeInfo_Info_context";
import {useActiveRecipeInfoIngredientsContext} from "../../../Context/activeRecipeInfo_Ingredients_context";
import {RecipeInfoInformation} from "./recipeInfoInformation";
import {RecipeInfoIngredients} from "./recipeInfoIngredients";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

const StyledInfoNavBar = styled.div`
background-color:  ${(props) => props.theme.colors.darkGrey};
display: flex;
justify-content: space-around;
text-align: center;
position: relative;
float: left;
top: 0;
width: 50%; 
height: 95px;
text-align: center;
&:hover {
        background-color: ${(props) => props.theme.colors.primaryDark2};
`;

const StyledNavCatText = styled.div`
text-decoration: none;
color: ${(props) => props.theme.colors.primaryWhite};
font-size: 2.5em;
font-family: Sansita Swashed;
padding-top: 15px;
`


export function RecipeInfoNav() {

    const {showRecipeInfoInformation, setShowRecipeInfoInformation} = useActiveRecipeInfoInformationContext();
    const {showRecipeInfoIngredients, setShowRecipeInfoIngredients} = useActiveRecipeInfoIngredientsContext();
    const {showRecipeInfo} = useActiveRecipeInfoContext();

    return(
        <div>
        <StyledInfoNavBar onClick={() => {
            if(showRecipeInfoIngredients) {
                setShowRecipeInfoInformation(!showRecipeInfoInformation)
                setShowRecipeInfoIngredients(!showRecipeInfoIngredients)
            }
        }}>
                <StyledNavCatText>
                    Info
                </StyledNavCatText>
        </StyledInfoNavBar>
        <StyledInfoNavBar onClick={() => {
            if(showRecipeInfoInformation) {
                setShowRecipeInfoInformation(!showRecipeInfoInformation)
                setShowRecipeInfoIngredients(!showRecipeInfoIngredients)
            }
        }}>
            <StyledNavCatText>
                Ingredients
            </StyledNavCatText>
        </StyledInfoNavBar>
            {showRecipeInfoInformation && <RecipeInfoInformation info={showRecipeInfo.info} img={showRecipeInfo.img}/>}
            {showRecipeInfoIngredients && <RecipeInfoIngredients ingredients={showRecipeInfo.ingredients}/>}
        </div>
    )
}