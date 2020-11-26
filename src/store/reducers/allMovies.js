import * as actions from "../actions/actions";
const initialState={
    movies:[],
    loading:false,
    error:null
}
const reducer = (state=initialState,action)=>{
    switch(action.type) {
        case actions.GET_MOVIES:

            return {
                ...state,
                movies: [...action.value]
            };
        case actions.GET_MOVIES_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actions.GET_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actions.GET_MOVIES_ERROR:

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