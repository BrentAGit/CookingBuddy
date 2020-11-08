import React from 'react';
import styled from "@emotion/styled";
import './App.css';
import Navbar from "./Components/navbar";
import Category from "./Components/categories";
import catData from "./Data/data.js";
import {ThemeProvider} from "emotion-theming";
import {theme} from "./theme";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Navbar/>
                {catData.map((category) =>{
                    return <Category name={category.name} recipes={category.recipes}/>
                })}
            </ThemeProvider>
        </div>
    );
}

export default App;
