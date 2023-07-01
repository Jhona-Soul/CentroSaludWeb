export const ProminentInitialState = JSON.parse(window.localStorage.getItem("prominent")) || [];
export const updateLocalStorage = state => {
    window.localStorage.setItem("prominent", JSON.stringify(state));
};

export const ProminentReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case "ADD_TO_PROMINENT":{
            const { id } = actionPayload;
            const doctorsInProminentIndex = state.findIndex(item => item.id === id);
        
            if (doctorsInProminentIndex >= 0) {
                const newState = structuredClone(state)
                updateLocalStorage(newState)
                return newState;
            }
            const newState =  [ 
                ...state, 
                {
                ...actionPayload
                }
            ]
            updateLocalStorage(newState);
            return newState;
        }
        case "REMOVE_TO_PROMINENT":{
            const { id } = actionPayload;
            const newState = state.filter(item => item.id !== id);
            updateLocalStorage(newState)
            return newState;
        }
        case "CLEAR_PROMINENT": {
            updateLocalStorage(ProminentInitialState)
            return ProminentInitialState;
        }
        default:
            break;
    }
    return state;
}

