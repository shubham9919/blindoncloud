let initialState = null

function SaveData(state = initialState, action){
    switch(action.type){
        case "SAVE":
            return state = action.payload
        default: return state
    }
}

export default SaveData;