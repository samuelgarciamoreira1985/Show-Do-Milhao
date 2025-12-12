import { createContext,useState } from "react";

export const ContextSettings = createContext()

export const ProvidderSettings = ({ children }) => {

    const [stages,setStages] = useState("MENU")

    return (
        <ContextSettings.Provider value={{stages,setStages}}>
            {children}
        </ContextSettings.Provider>
    )

}