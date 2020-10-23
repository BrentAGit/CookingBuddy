import React from 'react';
import styled from "@emotion/styled";
import './App.css';
import Navbar from "./Components/navbar";
import SearchCategory from "./Components/searchcategories";
import Category from "./Components/categories";
import categories from "./Data/data.js";

function App() {
    return (
        <div>
            <Navbar/>
            <SearchCategory categories={categories}/>
            {categories.map(function (category, index) {
                return <Category name={category.name} recipes={category.recipes} key={index}/>
            })}
        </div>
    );
}

export default App;
