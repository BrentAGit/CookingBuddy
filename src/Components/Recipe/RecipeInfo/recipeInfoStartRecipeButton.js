import React from 'react';
import styled from "@emotion/styled";
import {useActiveRecipeInfoContext} from "../../../Context/activeRecipeInfo_context";
import {useActiveRecipeGuideContext} from "../../../Context/activeRecipeGuide_context";

const StyledStartRecipeButton = styled.div`
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

const StyledStartRecipeButtonText = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 12px;
`

export function RecipeStartRecipeButton(props) {

    const {showRecipeInfo, setShowRecipeInfo} = useActiveRecipeInfoContext();
    const {showRecipeGuide, setShowRecipeGuide} = useActiveRecipeGuideContext();
    const {guide} = props;

    function changeUI(){
        setShowRecipeInfo({...showRecipeInfo, isActive: false});
        setShowRecipeGuide({...showRecipeGuide, isGuideActive:true, guide:guide});
    }

    return (
        <div>
            <StyledStartRecipeButton  onClick={() => changeUI()}>
                <StyledStartRecipeButtonText>
                    Start Recipe
                </StyledStartRecipeButtonText>
            </StyledStartRecipeButton>
        </div>
    )
}