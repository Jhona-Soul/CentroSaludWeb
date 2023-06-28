import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvaider = ({ children }) => {
    const [doctors, setDoctors ] = useState([]);
    const URL_API = "https://jsonplaceholder.typicode.com/users"

    async function ApiUsersList () {
        try {
            const response = await fetch(URL_API)
            setDoctors(await response.json());
        } catch(err) {
            console.log("No responde la API", err);
        }
    }

    useEffect(() => {
        ApiUsersList();
    }, [])
    console.log(doctors);

    return (
        <Context.Provider value={{doctors}}>
            {children}
        </Context.Provider>
    )
}