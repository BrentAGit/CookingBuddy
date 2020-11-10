import React from 'react';
import styled from "@emotion/styled";

const StyledCurrentStep = styled.div`
text-align: center;
color: ${(props) => props.theme.colors.primaryWhite};
font-weight: bold;
margin-top: 15px;
font-size: 2em;
font-family: Sansita Swashed;
`

export function RecipeGuideCurrentStep() {
    return (
        <StyledCurrentStep>
            Step 1 ⇦⇦⇦⇦⇦ Take this out of data!!!
        </StyledCurrentStep>
    )
}