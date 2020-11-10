import React from 'react';
import catData from "../../Data/data";
import Category from "./categories";
import {useActiveRecipeGuideContext} from "../../Context/activeRecipeGuide_context";
import {RecipeGuide} from "../Recipe/RecipeGuide/recipeGuide";

export function MainPageContent() {

    const {showRecipeGuide} = useActiveRecipeGuideContext();
    const {isGuideActive} = showRecipeGuide;

    return(
        <div>
            {isGuideActive && <RecipeGuide guide={showRecipeGuide.guide}/>}
            <div>
                {catData.map((category, index) =>{
                    return <Category name={category.name} recipes={category.recipes} key={index}/>
                })}
            </div>
        </div>
    )
}
