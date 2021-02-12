import {JokesActionTypes} from "./jokes.types";

import axios from "../../axios.config";

const fetchCategories = categories => {
  return {
    type: JokesActionTypes.FETCH_CATEGORIES,
    payload: categories,
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

const setLoading = () => {
  return {
    type: JokesActionTypes.IS_LOADED,
  };
};

export const getFetchUrl = fetchUrl => {
  return {
    type: JokesActionTypes.GET_FETCH_URL,
    payload: fetchUrl,
  };
};

const fetchJoke = joke => {
  return {
    type: JokesActionTypes.FETCH_JOKE,
    payload: joke,
  };
};

export const fetchJokeAsync = url => {
  return dispatch => {
    dispatch(setLoading());
    axios
      .get(url)
      .then(response => {
        const joke = response.data;
        // console.log(response);
        dispatch(fetchJoke(joke));
      })
      .catch(err => console.log(err));
  };
};

export const getSearchQuery = searchQuery => {
  return {
    type: JokesActionTypes.GET_SEARCH_QUERY,
    payload: searchQuery,
  };
};

export const searchJokeAsync = query => {
  return dispatch => {
    dispatch(setLoading());
    axios
      .get(`search?query=${query}`)
      .then(response => {
        const total = response.data.total;
        const searchQuery = response.data.total === 0 ? query : "";
        const random = Math.floor(Math.random() * total);
        const joke = response.data.result[random];
        dispatch(fetchJoke(joke));
        dispatch(getSearchQuery(searchQuery));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
