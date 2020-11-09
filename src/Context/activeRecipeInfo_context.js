import React, {createContext, useContext, useMemo, useState} from "react";

const ActiveRecipeInfoContext = createContext();

export function ActiveRecipeInfoProvider(props) {
    const [showRecipeInfo, setShowRecipeInfo] = useState(false)

    const api = useMemo(() => ({
            showRecipeInfo,
            setShowRecipeInfo
        }), [showRecipeInfo, setShowRecipeInfo]
    );
    return (
        <ActiveRecipeInfoContext.Provider value={api}>
            {props.children}
        </ActiveRecipeInfoContext.Provider>
    )
}

export const useActiveRecipeInfoContext =
    () => useContext(ActiveRecipeInfoContext);
