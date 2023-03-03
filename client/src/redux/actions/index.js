import axios from "axios";
import { GET_GAMES, GET_GAME_BY_ID, GET_GAME_BY_NAME, ORDER_ALFABETIC, ORDER_RATING, FILTER_BY_GENRE, GET_GENRES, CLEAN, GET_PLATFORMS } from "../actionsTypes/index";

export function getGames() {
  return async function (dispatch) {
    let games = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_GAMES,
      payload: games.data 
    });
  };
}

export const getGameByName = (name) => {
  return async function(dispatch){
    let games = await axios.get(`http://localhost:3001/videogames?name=${name}`)
    return dispatch({
      type: GET_GAME_BY_NAME,
      payload: games.data
    })
  }
}

export const getGenres = () => {
  return async function (dispatch) {
    let genres = await axios.get(`http://localhost:3001/genres`)
    return dispatch({
      type: GET_GENRES,
      payload: genres.data
    })
  }
}

export const getPlatforms = () => {
  return async function (dispatch) {
    let platforms = await axios.get(`http://localhost:3001/platforms`)
    return dispatch({
      type: GET_PLATFORMS,
      payload: platforms.data
    })
  }
}


export function getGameById(id){
  return async function(dispatch) {
    let game = await axios.get(`http://localhost:3001/videogames/${id}`)
    return dispatch({
      type: GET_GAME_BY_ID,
      payload: game.data
    })
  }
}

export const orderAlfabetic = (payload) => {
  return {
    type: ORDER_ALFABETIC,
    payload,
  }
}

export function orderRating(payload){
  return {
    type: ORDER_RATING,
    payload
  }
}

export function cleaned(){
  return {
    type: CLEAN,
  }
}

export const filterByGenre = (payload) => {
return  {
    type: FILTER_BY_GENRE,
    payload,
  }
} 

export const postVideogames = (payload) => {
  return async function () {
    try {
      let respuesta = await axios.post(
        `http://localhost:3001/videogames`,
        payload
      );
      alert("Videogame Created");
      return respuesta;
    } catch (err) {
      alert("ERROR :" + err.response.data.err )
    }
  };
};