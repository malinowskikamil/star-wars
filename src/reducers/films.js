export default (state = {}, action) => {
  switch (action.type) {
    case "FILMS_LOADING":
      return {
        ...state,
        [action.id]: {
          status: "loading",
        },
      };
    case "FILMS_SUCCESS":
      return {
        ...state,
        [action.id]: {
          status: "success",
          timestamp: new Date().getTime(),
          ...action.data,
        },
      };
    case "FILMS_FAILURE":
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
