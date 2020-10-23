import React from 'react';
import styled from "@emotion/styled";

const StyledSearchBar = styled.div`
color: #ffffff;
margin-top: 95px;
display: flex;
justify-content: space-around;
text-align: center;
padding-bottom: 46vh;
`;

const StyledDiv = styled.div`
background-color: #282c34;
width: 20%;
`;

export default function SearchCategory(prop) {

    const {categories} = prop;

    return (
        <StyledSearchBar id="searchBar">
            {categories.map(function (category, index) {
                return (
                    <StyledDiv key={index} onClick={function() {
                        console.log(category.name)
                    }}>
                        <h1>{category.name}</h1>
                    </StyledDiv>
                )
            })}
        </StyledSearchBar>
    )
}