import { createContext } from "react";

export const Context = createContext();

export const ContextProvaider = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}