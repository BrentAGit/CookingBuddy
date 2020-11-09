import React from 'react';
import styled from "@emotion/styled";

const StyledInformation = styled.div`
font-size: 1.5em;
font-family: Sansita Swashed;
text-align: center;
padding-top: 100px;
`

const StyledImage = styled.img`
width: 100%;
length: 100%;
`

export function RecipeInfoInformation(props)  {

    const {info, img} =  props;

    return(
        <div>
        <StyledInformation>
            {info}
        </StyledInformation>
            <StyledImage src={img}/>
        </div>
    )
}