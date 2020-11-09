import React, {useState} from 'react';
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
  padding-top: 60px; 
  transition: width 2s;
`;

export default function RecipeInfo(props) {

    const {setShowRecipeInfo} = useActiveRecipeInfoContext();

    return <StyledRecipeInfo onClick={() =>
        setShowRecipeInfo}>
        aaaaaaaaaaaaaaaaaa
    </StyledRecipeInfo>
}