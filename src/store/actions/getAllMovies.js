import * as actions from "./actions";
import { ytsInstance as axios } from "../../axios";

export const getAllMovies = () => {
  return (dispatch) => {
    dispatch({ type: actions.GET_MOVIES_START });
    axios.get("/list_movies.json").then((res) => {
      const movies = res.data.data.movies;
      dispatch({ type: actions.GET_MOVIES, value: movies });
      dispatch({ type: actions.GET_MOVIES_SUCCESS });
      dispatch({ type: actions.INITIALIZE_HOMEPAGE_MOVIES, value: movies });
    })
        .catch(err=>{
            dispatch({type:actions.GET_MOVIES_ERROR,value:err.message})
        })
  };
};
