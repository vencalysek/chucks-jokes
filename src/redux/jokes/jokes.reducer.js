import {JokesActionTypes} from "./jokes.types";

const INIT_STATE = {
  fetchUrl: "",
  joke: '',
  categories: [],
  selectedCategory: "",
  jokeSearchQuery: "",
};

const jokesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case JokesActionTypes.GET_FETCH_URL:
      return {
        ...state,
        fetchUrl: action.payload,
      };
      
    case JokesActionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case JokesActionTypes.FETCH_JOKE:
      return {
        ...state,
        joke: action.payload,
      }

    case JokesActionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default jokesReducer;
