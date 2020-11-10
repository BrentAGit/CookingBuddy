import React from 'react';
import './App.css';
import {Navbar} from "./Components/UI/navbar";
import {ThemeProvider} from "emotion-theming";
import {theme} from "./theme";
import {ActiveRecipeInfoProvider} from "./Context/activeRecipeInfo_context";
import {MainPageContent} from "./Components/Main Page Content/mainPageContent";
import {ActiveRecipeInfoInformationProvider} from "./Context/activeRecipeInfo_Info_context";
import {ActiveRecipeInfoIngredientsProvider} from "./Context/activeRecipeInfo_Ingredients_context";
import {ActiveRecipeGuideProvider} from "./Context/activeRecipeGuide_context";
import {Route, BrowserRouter as Router} from "react-router-dom"


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
        <Router>
            <ActiveRecipeGuideProvider>
                <ActiveRecipeInfoIngredientsProvider>
                    <ActiveRecipeInfoInformationProvider>
                        <ActiveRecipeInfoProvider>
                            <ThemeProvider theme={theme}>
                                <ProvidedApp/>
                            </ThemeProvider>
                        </ActiveRecipeInfoProvider>
                    </ActiveRecipeInfoInformationProvider>
                </ActiveRecipeInfoIngredientsProvider>
            </ActiveRecipeGuideProvider>
        </Router>
    );
}

export default App;
