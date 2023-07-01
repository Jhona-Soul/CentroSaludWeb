import { createContext, useState, useEffect, useReducer } from "react";
import { ProminentInitialState, ProminentReducer } from "../reducer/ReducerProminent";

export const DoctorsContext = createContext();

function useProminentReducer () {
    const [state, dispatch] = useReducer(ProminentReducer, ProminentInitialState)

    const addToProminent = doctors  => dispatch({
        type: "ADD_TO_PROMINENT",
        payload: doctors
    })
    const removeFromProminent = doctors => dispatch({
        type: "REMOVE_TO_PROMINENT",
        payload: doctors
    })
    const clearProminent = () => dispatch({
        type: "CLEAR_PROMINENT",
    })

    return { state, addToProminent, removeFromProminent, clearProminent };
}

export const ContextProvaider = ({ children }) => {
    const [doctors, setDoctors ] = useState([]);
    const { state, addToProminent, removeFromProminent, clearProminent} = useProminentReducer();
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

    return (
        <DoctorsContext.Provider value={{ doctors,
            prominent: state, 
            addToProminent,
            removeFromProminent, 
            clearProminent
         }}>
            {children}
        </DoctorsContext.Provider>
    )
}