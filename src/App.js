import React from 'react';
import './App.css';
import Navbar from "./Components/UI/navbar";
import Category from "./Components/Main Page Content/categories";
import catData from "./Data/data";
import {ThemeProvider} from "emotion-theming";
import {theme} from "./theme";
import {ActiveRecipeInfoProvider} from "./Context/activeRecipeInfo_context";

function App() {
    return (
        <div>
            <ActiveRecipeInfoProvider>
            <ThemeProvider theme={theme}>
                <Navbar/>
                {catData.map((category) =>{
                    return <Category name={category.name} recipes={category.recipes}/>
                })}
            </ThemeProvider>
            </ActiveRecipeInfoProvider>
        </div>
    );
}

export default App;
