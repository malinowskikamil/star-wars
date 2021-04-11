export default (state = {}, action) => {
  switch (action.type) {
    case "PLANETS_LOADING":
      return {
        ...state,
        [action.id]: {
          status: "loading",
        },
      };
    case "PLANETS_SUCCESS":
      return {
        ...state,
        [action.id]: {
          status: "success",
          ...action.data,
        },
      };
    case "PLANETS_FAILURE":
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
