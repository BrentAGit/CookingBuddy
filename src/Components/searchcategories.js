import React from 'react';
import styled from "@emotion/styled";

const StyledSearchBar = styled.div`
color: ${(props) => props.theme.colors.primaryWhite};
margin-top: 95px;
display: flex;
justify-content: space-around;
text-align: center;
padding-bottom: 46vh;
`;

const StyledDiv = styled.div`
background-color: ${(props) => props.theme.colors.darkGrey};
width: 20%;
`;

const StyledA = styled.a`
text-decoration: none;
color: inherit; 
`;

export default function SearchCategory(props) {

    const {categories} = props;

    return (
        <StyledSearchBar>
            {categories.map((category, index) => {
                return (
                    <StyledDiv key={index}>
                        <StyledA href={`#${category.name}`}>
                            <h1>{category.name}</h1>
                        </StyledA>
                    </StyledDiv>
                )
            })}
        </StyledSearchBar>
    )
}