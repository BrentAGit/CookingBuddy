import React from 'react';
import './App.css';
import {Navbar} from "./Components/UI/navbar";
import {ThemeProvider} from "emotion-theming";
import {theme} from "./theme";
import {ActiveRecipeInfoProvider} from "./Context/activeRecipeInfo_context";
import {MainPageContent} from "./Components/Main Page Content/mainPageContent"

function ProvidedApp() {
    return (
        <div>
                <Navbar/>
                <MainPageContent/>
        </div>
    );
}

function App() {
    return (
            <ActiveRecipeInfoProvider>
                <ThemeProvider theme={theme}>
                    <ProvidedApp/>
                </ThemeProvider>
            </ActiveRecipeInfoProvider>
    );
}

export default App;
