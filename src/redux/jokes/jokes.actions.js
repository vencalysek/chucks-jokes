import {JokesActionTypes} from "./jokes.types";

import axios from "../../axios.config";

const fetchCategories = categories => {
  return {
    type: JokesActionTypes.FETCH_CATEGORIES,
    payload: categories,
  };
};

const fetchJoke = joke => {
  return {
    type: JokesActionTypes.FETCH_JOKE,
    payload: joke,
  };
};

export const fetchJokeAsync = (url) => {
  return dispatch => {
    axios.get(`random${url}`).then(response => {
      const joke = response.data;
      dispatch(fetchJoke(joke));
    });
  };
};

export const fetchCategoriesAsync = () => {
  return dispatch => {
    axios.get("categories").then(response => {
      const categories = response.data;
      dispatch(fetchCategories(categories));
    });
  };
};

export const getFetchUrl = fetchUrl => {
  return {
    type: JokesActionTypes.GET_FETCH_URL,
    payload: fetchUrl,
  };
};

export const selectCategory = category => {
  return {
    type: JokesActionTypes.SELECT_CATEGORY,
    payload: category,
  };
};
