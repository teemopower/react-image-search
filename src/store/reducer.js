const cardsState = {
  payload: []
};

export const cardsReducer = (state = cardsState, action) => {
  switch (action.type) {
    case "GET_SEARCH_DATA":
      return Object.assign({}, state, {
        payload: action.payload
      });
    default:
      return state;
  }
};
