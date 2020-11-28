import * as actions from "./actionsTypes";
import { ytsInstance as axios } from "../../axios";
export const getSingleMovie = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.GET_SINGLE_MOVIE_START, value: null });

    let movieDetail = axios.get(
      `/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );
    let movieSuggestions = axios.get(`/movie_suggestions.json?movie_id=${id}`);

    // GET simulteneous request
    Promise.all([movieDetail, movieSuggestions])
      .then((values) => {
        let [movie, movieSuggestion] = values;
        movie = movie.data.data;
        dispatch({
          type: actions.GET_SINGLE_MOVIE,
          value: { movie: movie, suggestedMovie: movieSuggestion },
        });
        dispatch({ type: actions.GET_SINGLE_MOVIE_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.GET_SINGLE_MOVIE_ERROR, value: err.message });
      });
  };
};
