import React, {createContext, useContext, useMemo, useState} from "react";

const ActiveRecipeInfoContext = createContext();

export function ActiveRecipeInfoInformationProvider(props) {
    const [showRecipeInfoInformation, setShowRecipeInfoInformation] = useState(true)

    const api = useMemo(() => ({
            showRecipeInfoInformation,
            setShowRecipeInfoInformation
        }), [showRecipeInfoInformation, setShowRecipeInfoInformation]
    );
    return (
        <ActiveRecipeInfoContext.Provider value={api}>
            {props.children}
        </ActiveRecipeInfoContext.Provider>
    )
}

export const useActiveRecipeInfoInformationContext =
    () => useContext(ActiveRecipeInfoContext);