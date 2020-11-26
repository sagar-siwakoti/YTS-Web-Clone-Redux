import { combineReducers } from "redux";
import allMoviesReducer from "./reducers/allMovies";

const rootReducer = combineReducers({
  allMovies: allMoviesReducer,
});
export default rootReducer;
