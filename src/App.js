import React from 'react';
import styled from "@emotion/styled";
import './App.css';
import Navbar from "./Components/navbar";
import SearchCategory from "./Components/searchcategories";
import Category from "./Components/categories";
import categories from "./Data/data.js";
import {ThemeProvider} from "emotion-theming";
import {theme} from "./theme";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
            <Navbar/>
            <SearchCategory categories={categories}/>
            {categories.map((category, index) =>{
                return <Category name={category.name} recipes={category.recipes} key={index}/>
            })}
            </ThemeProvider>
        </div>
    );
}

export default App;
