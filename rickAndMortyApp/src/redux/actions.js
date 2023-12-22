import { GET_CHARACTERS , SET_ALERT, DELETE_CHARACTER, GET_RANDOM_CHARACTERS, IS_FAV, IS_NOT_FAV, GET_CHARACTER_DETAIL, CLEAN_CHARACTER} from "./actionTypes"
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

export const setAlert = (object) => {
  return {
    type: SET_ALERT,
    payload: object
  }
}

export const deleteCharacter = (id) => {

  return {
    type: DELETE_CHARACTER,
    payload: id
  }
}

export const getRandomCharacter = () => {
  const randomNumber = Math.floor(Math.random() * 826)
  return async (dispatch) => {
      try {
        const { data } = await axios(endpoint + randomNumber);
        return dispatch({
          type: GET_RANDOM_CHARACTERS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
  };

}

export const isFavorite = (id) => {
    return {
      type: IS_FAV,
      payload: id
    }
}
export const isNotFavorite = (id) => {
    return {
      type: IS_NOT_FAV,
      payload: id
    }
}

export const getCharacterDetail = (id) => {

  return async (dispatch) => {
      try {
        const { data } = await axios(endpoint + id);
        return dispatch({
          type: GET_CHARACTER_DETAIL,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
  };

}

export const cleanCharacter = () => {

  return {
    type: CLEAN_CHARACTER
  }
}