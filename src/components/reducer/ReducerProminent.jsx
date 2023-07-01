
export const ProminentinitialState = JSON.parse(window.localStorage.getItem("prominent")) || [];
export const ProminentReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action;
    switch (actionType) {
        case "ADD_TO_PROMINENT":{
            const { id } = actionPayload;
            const doctorsInProminentIndex = state.findIndex(item => item.id === id);
        
            if (doctorsInProminentIndex >= 0) {
                const newState = structuredClone(state)
                newState[doctorsInProminentIndex]
                return newState;
            }
            return [ 
                ...state, 
                {
                ...actionPayload
                }
            ]
        }
        case "REMOVE_TO_PROMINENT":{
            const { id } = actionPayload;
            return( prevState => prevState.filter(item => item.id !== id));
        }
        case "CLEAR_PROMINENT": {
            return ProminentinitialState;
        }
        default:
            break;
    }
    return state;
}

