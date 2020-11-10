import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

const StyledCloseInfoButton = styled.div`
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

const StyledCloseInfoButtonText = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 12px;
`

export function RecipeStartRecipeButton() {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();

    return (
        <div>
            <StyledCloseInfoButton  onClick={() =>
                setShowRecipeInfo({...showRecipeInfo, isActive: false})}>
                <StyledCloseInfoButtonText>
                    Start Recipe
                </StyledCloseInfoButtonText>
            </StyledCloseInfoButton>
        </div>
    )
}