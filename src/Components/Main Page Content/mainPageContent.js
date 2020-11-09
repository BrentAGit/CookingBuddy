import React from 'react';
import catData from "../../Data/data";
import Category from "./categories";

export function MainPageContent() {
    return(
        <div>
        {catData.map((category, index) =>{
                return <Category name={category.name} recipes={category.recipes} key={index}/>
            })}
        </div>
    )
}
