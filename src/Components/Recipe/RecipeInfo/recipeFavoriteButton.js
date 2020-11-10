import React, {useState} from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

const StyledFavoriteButton = styled.div`
  margin-top: 15px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  display: table;
  text-align: center;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  border: 5px solid ${(props) => props.theme.colors.primaryDark};
  &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark2};
`

const StyledFavoriteButtonText = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 12px;
`

export function RecipeFavoriteButton() {

    const {showRecipeInfo} = useActiveRecipeInfoContext();
    let favoriteRecipesArray = JSON.parse(localStorage.getItem("favoriteRecipe")) ?? []; //?? => checks if value is null, if so, returns empty array
    const [isRecipeFavorite, setIsRecipeFavorite] = useState(favoriteRecipesArray.includes(showRecipeInfo.id))

    function addFavoriteRecipe() {
        setIsRecipeFavorite(!isRecipeFavorite)
        let favoriteRecipe = localStorage.getItem("favoriteRecipe");
        if (favoriteRecipe !== null && favoriteRecipe !== "null") {
            let favoriteRecipes = JSON.parse(favoriteRecipe);
            if (favoriteRecipes.includes(showRecipeInfo.id)) {
                favoriteRecipes = favoriteRecipes.filter(val => val !== showRecipeInfo.id); //filter => Makes it so that the value can only be on the array once
            } else {
                favoriteRecipes.push(showRecipeInfo.id);

            }
            localStorage.setItem("favoriteRecipe", JSON.stringify(favoriteRecipes));
        } else {
            let favoriteRecipes = [];
            favoriteRecipes.push(showRecipeInfo.id);
            localStorage.setItem("favoriteRecipe", JSON.stringify(favoriteRecipes));
        }
    }


    return (
        <div>
            {!isRecipeFavorite && <StyledFavoriteButton onClick={() => addFavoriteRecipe()
            }>
                <StyledFavoriteButtonText>
                    Favorite Recipe
                </StyledFavoriteButtonText>
            </StyledFavoriteButton>}
            {isRecipeFavorite && <StyledFavoriteButton onClick={() => addFavoriteRecipe()
            }>
                <StyledFavoriteButtonText>
                    Unfavorite Recipe
                </StyledFavoriteButtonText>
            </StyledFavoriteButton>}
        </div>
    )
}