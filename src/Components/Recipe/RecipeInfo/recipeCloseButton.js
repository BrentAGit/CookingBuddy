import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";

const StyledCloseInfoButton = styled.div`
  margin-top: 15px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  font-weight: bold;
  display: table;
`

export function RecipeCloseButton() {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();

    return (
        <div>
            <StyledCloseInfoButton  onClick={() =>
                setShowRecipeInfo({...showRecipeInfo, isActive: false})}>
                Close
            </StyledCloseInfoButton>
        </div>
    )
}