export default (state = {}, action) => {
  switch (action.type) {
    case "STARSHIPS_LOADING":
      return {
        ...state,
        [action.id]: {
          status: "loading",
        },
      };
    case "STARSHIPS_SUCCESS":
      return {
        ...state,
        [action.id]: {
          status: "success",
          ...action.data,
        },
      };
    case "STARSHIPS_FAILURE":
      return {
        ...state,
        [action.id]: {
          status: "failure",
          err: action.err,
        },
      };
    default:
      return state;
  }
};
