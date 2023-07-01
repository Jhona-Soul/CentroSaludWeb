import { createContext, useState } from "react";

export const ProminentContext = createContext();

export const ProminentProvider = ({ childrem }) => {
    const [ prominent, setProminent] = useState([]);

    const addToProminent = doctors => {
        const doctorsInProminentIndex = prominent.findIndex(item => item.id === doctors.id);
        
        if (doctorsInProminentIndex >= 0) {
            const newProminent = structuredClone(prominent)
            newProminent[doctorsInProminentIndex]
            return setProminent(newProminent);
        }
        setProminent( prevState => ([
            ...prevState, 
            {
                ...doctors
            }
        ]))
    }

    const clearProminent = () => {
        setProminent([]);
    };
    
    return (
        <ProminentContext.Provider value={{
            prominent, 
            setProminent, 
            addToProminent, 
            clearProminent}}>
            { childrem }
        </ProminentContext.Provider>
    )

}