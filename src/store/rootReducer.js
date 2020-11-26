import { combineReducers } from "redux";
import allMoviesReducer from "./reducers/allMovies";
import homePageMoviesReducer from "./reducers/homepage";
import singleMovieReducer from "./reducers/selectedMovie";
import searchMovieReducer from "./reducers/searchedMovie";
const rootReducer = combineReducers({
  allMovies: allMoviesReducer,
  homepage: homePageMoviesReducer,
  searchedMovies: searchMovieReducer,
});
export default rootReducer;
