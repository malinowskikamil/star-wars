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
          timestamp: new Date().getTime(),
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
