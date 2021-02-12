import {JokesActionTypes} from "./jokes.types";

const INIT_STATE = {
  fetchUrl: "random",
  joke: '',
  categories: [],
  searchQuery: '',
  searchedJoke: '',
  isLoaded: false,
};

const jokesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case JokesActionTypes.IS_LOADED:
      return {
        ...state,
        isLoaded: false
      }

    case JokesActionTypes.GET_FETCH_URL:
      return {
        ...state,
        fetchUrl: action.payload,
      };
      
    case JokesActionTypes.FETCH_JOKE:
      return {
        ...state,
        joke: action.payload,
        isLoaded: true
      }

    case JokesActionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case JokesActionTypes.GET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      }

    default:
      return state;
  }
};

export default jokesReducer;
