import React, {createContext, useContext, useMemo, useState} from "react";

const ActiveRecipeInfoContext = createContext();

export function ActiveRecipeInfoIngredientsProvider(props) {
    const [showRecipeInfoIngredients, setShowRecipeInfoIngredients] = useState(false)

    const api = useMemo(() => ({
            showRecipeInfoIngredients,
            setShowRecipeInfoIngredients
        }), [showRecipeInfoIngredients, setShowRecipeInfoIngredients]
    );
    return (
        <ActiveRecipeInfoContext.Provider value={api}>
            {props.children}
        </ActiveRecipeInfoContext.Provider>
    )
}

export const useActiveRecipeInfoIngredientsContext =
    () => useContext(ActiveRecipeInfoContext);