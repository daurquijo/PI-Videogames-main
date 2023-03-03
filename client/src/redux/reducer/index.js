import {
  GET_GAMES,
  GET_GAME_BY_ID,
  GET_GAME_BY_NAME,
  GET_GENRES,
  ORDER_ALFABETIC,
  ORDER_RATING,
  FILTER_BY_GENRE,
  CLEAN,
  GET_PLATFORMS,
} from "../actionsTypes/index";

const initialState = {
  games: [],
  genres: [],
  game: [],
  platforms: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAME_BY_NAME:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAME_BY_ID:
      return {
        ...state,
        game: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

      case GET_PLATFORMS:
        return {
          ...state,
          platforms: action.payload,
        };

    case FILTER_BY_GENRE:
      const games = state.games;
      const filter = games.filter((game) =>
        game.genres.includes(action.payload)
      );
      return {
        ...state,
        games: filter,
      };

    case CLEAN:
      return {
        ...state,
        game:[]
      };

    case ORDER_ALFABETIC:
      let sortAlfabetic =
        action.payload === "a-z"
          ? state.games.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.games.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        games: sortAlfabetic,
      };

    case ORDER_RATING:
      let sortRating =
        action.payload === "0-5"
          ? state.games.sort(function (a, b) {
              if (a.rating > b.rating) return 1;
              if (a.rating < b.rating) return -1;
              return 0;
            })
          : state.games.sort(function (a, b) {
              if (a.rating > b.rating) return -1;
              if (a.rating < b.rating) return 1;
              return 0;
            });
      return {
        ...state,
        games: sortRating,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
