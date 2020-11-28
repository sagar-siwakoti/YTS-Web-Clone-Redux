import * as actions from "../actions/actionsTypes";

const initialState = {
  currentMovie: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SINGLE_MOVIE:
      return {
        ...state,
        currentMovie: { ...action.value.movie.movie },
      };
    case actions.GET_SINGLE_MOVIE_START:
      return {
        ...state,
        currentMovie: action.value,
        loading: true,
        error: null,
      };
    case actions.GET_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actions.GET_SINGLE_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
