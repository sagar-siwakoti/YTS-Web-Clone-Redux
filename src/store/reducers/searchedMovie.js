import * as actions from '../actions/actionsTypes';

const initialState = {
    searchedMovies:null,
    loading: false,
    error: null
}

const reducer = (state=initialState,action) => {

    switch(action.type) {
        case actions.GET_SEARCH_START:
            return {
                ...state,
                searchedMovies: null,
                loading: true,
                error: null
            }
        case actions.GET_SEARCH_SUCCESS:
            return {
                ...state,
                searchedMovies: [...action.value],
                loading: false
            }
        case actions.GET_SEARCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.value
            }
        default:
            return state;
    }
}
export default reducer;