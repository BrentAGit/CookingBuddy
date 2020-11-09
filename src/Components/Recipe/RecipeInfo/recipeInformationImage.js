import React from 'react';
import styled from "@emotion/styled";

const StyledDiv = styled.div`
padding-top: 20px;
`

const StyledImage = styled.img`
width: 95%;
length: 100%;
display: block;
margin-left: auto;
margin-right: auto;
border: 8px solid ${(props) => props.theme.colors.primaryDark};
`

export function RecipeInformationImage(props) {

    const {img} = props;

    return(
        <StyledDiv>
            <StyledImage src={img}/>
        </StyledDiv>
    )
}