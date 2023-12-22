import { DELETE_CHARACTER, GET_CHARACTERS, SET_ALERT, GET_RANDOM_CHARACTERS, IS_FAV, IS_NOT_FAV, GET_CHARACTER_DETAIL, CLEAN_CHARACTER} from "./actionTypes"

const initialState = {
    count: 0,
    allCharacters: [],
    alert: {
        isOpen: false,
        message: ""
    },
    allFavoritesCharacters: [],
    characterDetail: {}
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
            
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        case SET_ALERT:
            return {
                ...state,
                alert: {
                    isOpen: action.payload.isOpen,
                    message: action.payload.message
                }
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((char) => char.id !== Number(action.payload)),
                allFavoritesCharacters: state.allFavoritesCharacters.filter((char) => char.id !== Number(action.payload))
            }
        case GET_RANDOM_CHARACTERS:
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            }
        case IS_FAV:
            const characterFav = state.allCharacters.find((char) => char.id === Number(action.payload))
            console.log(characterFav)
            console.log(state.allFavoritesCharacters)
            return {
                ...state,
                allFavoritesCharacters: [...state.allFavoritesCharacters, characterFav]
            }
        case IS_NOT_FAV:
            const newAllFavorites = state.allFavoritesCharacters.filter((char) => char.id !== Number(action.payload))
            
            return {
                ...state,
                allFavoritesCharacters: newAllFavorites
            }
        case GET_CHARACTER_DETAIL:
            console.log(action.payload)
            console.log("in the case GET CHARACTER DETAIL")
            return {
                ...state,
                characterDetail: action.payload
            }
        case CLEAN_CHARACTER:
            return {
                ...state,
                characterDetail: {}
            }
        default:
            return {
                ...state,
              };
    }

}

export default reducer;