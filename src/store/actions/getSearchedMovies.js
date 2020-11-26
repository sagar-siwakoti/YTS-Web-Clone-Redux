import * as actions from "./actionsTypes";
import { ytsInstance as axios } from "../../axios";

const getSearchedMovies = (query) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_SEARCH_START });
    axios
      .get(`/list_movies.json?query_term=${query}`)
      .then((res) => {
        let movies = res.data.data.movies;
        dispatch({ type: actions.GET_SEARCH_SUCCESS, value: movies });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.GET_SEARCH_ERROR, value: err.message });
      });
  };
};
export const getBrowsedMovies = (data) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_SEARCH_START });
    const url = `/list_movies.json?query_term=${data.name}&genre=${data.genre}&order_by=${data.order_by}&quality=${data.quality}&minimum_rating=${data.rating}&sort_by=${data.year}`;
    axios
      .get(url)
      .then((res) => {
        let movies = res.data.data.movies;

        dispatch({ type: actions.GET_SEARCH_SUCCESS, value: movies });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.GET_SEARCH_ERROR, value: err.message });
      });
  };
};
export default getSearchedMovies;
