import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoContext} from "../../Context/activeRecipeInfo_context";

const StyledRecipeInfo = styled.div`
  height: 100%; 
  width: 35%; 
  position: fixed;
  z-index: 1; 
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.lightGrey}; 
  overflow-x: hidden; 
  transition: all 2s linear;
`;

const StyledCloseInfoButton = styled.div`
  margin-top: 15px;
  background-color: ${(props) => props.theme.colors.darkGrey};
  font-weight: bold;
  display: table;
`

export default function RecipeInfo(props) {

    const {setShowRecipeInfo} = useActiveRecipeInfoContext();

    return <StyledRecipeInfo>
        <StyledCloseInfoButton  onClick={() =>
            setShowRecipeInfo(!setShowRecipeInfo)}>
            Close
            </StyledCloseInfoButton>
    </StyledRecipeInfo>
}