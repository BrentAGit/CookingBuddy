import React, {createContext, useContext, useMemo, useState} from "react";

const ActiveRecipeGuideContext = createContext();

export function ActiveRecipeGuideProvider(props) {
    const [showRecipeGuide, setShowRecipeGuide] = useState(false)

    const api = useMemo(() => ({
            showRecipeGuide,
            setShowRecipeGuide
        }), [showRecipeGuide, setShowRecipeGuide]
    );
    return (
        <ActiveRecipeGuideContext.Provider value={api}>
            {props.children}
        </ActiveRecipeGuideContext.Provider>
    )
}

export const useActiveRecipeGuideContext =
    () => useContext(ActiveRecipeGuideContext);