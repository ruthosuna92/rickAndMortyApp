import { GET_CHARACTERS } from "./actionTypes"
import axios from "axios"

const endpoint = "https://rickandmortyapi.com/api/character/"

export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const getCharacter = (id) => {

    return async (dispatch) => {
        try {
          const { data } = await axios(endpoint + id);
          return dispatch({
            type: GET_CHARACTERS,
            payload: data,
          });
        } catch (error) {
          console.log(error);
        }
    };

}