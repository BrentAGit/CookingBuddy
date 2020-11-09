import React from 'react';
import styled from "@emotion/styled";

const StyledUnorderedList = styled.ul`
margin-top: 0;
`

const StyledList = styled.li`
padding-top: 25px;
list-style-type: none;
font-size: 1.5em;
font-family: Sansita Swashed;
`

const StyledDiv = styled.div`
padding-top: 100px;
`

const CheckBox = styled('input')`
  transform: scale(1);
  margin-left: -15px;
  margin-right: 15px;
 `

export function RecipeInfoIngredients(props)  {

    const {ingredients} = props

    return(
        <StyledDiv>
            <StyledUnorderedList>
            {ingredients.map((ingredientsList) =>{
                return <StyledList>
                    <CheckBox type="checkbox"/>
                    {ingredientsList}
                </StyledList>
            })}
            </StyledUnorderedList>
        </StyledDiv>
    )
}