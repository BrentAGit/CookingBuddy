import React from 'react';
import {RecipeInfoInformation} from "./recipeInfoInformation";
import {RecipeInfoIngredients} from "./recipeInfoIngredients";
import {useActiveRecipeInfoInformationContext} from "../../../Context/activeRecipeInfo_Info_context";
import {useActiveRecipeInfoIngredientsContext} from "../../../Context/activeRecipeInfo_Ingredients_context";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

export function RecipeInfoBody() {

    const {showRecipeInfoInformation} = useActiveRecipeInfoInformationContext();
    const {showRecipeInfoIngredients} = useActiveRecipeInfoIngredientsContext();
    const {showRecipeInfo} = useActiveRecipeInfoContext();

    return(
        <div>
            {showRecipeInfoInformation && <RecipeInfoInformation info={showRecipeInfo.info} img={showRecipeInfo.img}/>}
            {showRecipeInfoIngredients && <RecipeInfoIngredients ingredients={showRecipeInfo.ingredients}/>}
        </div>
    )
}