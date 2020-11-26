import * as actions from "../actions/actionsTypes";

const initialState = {
  popular: [],
  latest: [],
  upcoming: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INITIALIZE_HOMEPAGE_MOVIES:
      return {
        ...state,
        popular: [...action.value.slice(0, 4)],
        latest: [...action.value.slice(5, 13)],
        upcoming: [...action.value.slice(14, 18)],
      };
    default:
      return state;
  }
};
export default reducer;
