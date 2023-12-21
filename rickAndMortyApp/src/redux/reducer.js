import { GET_CHARACTERS } from "./actionTypes"

const initialState = {
    count: 0,
    allCharacters: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
            case "DECREMENT":
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0
            }
        case GET_CHARACTERS:
            console.log(action.payload)
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        default:
            return {
                ...state,
              };
    }

}

export default reducer;