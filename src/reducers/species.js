export default (state = {}, action) => {
  switch (action.type) {
    case "SPECIES_LOADING":
      return {
        ...state,
        [action.id]: {
          status: "loading",
        },
      };
    case "SPECIES_SUCCESS":
      return {
        ...state,
        [action.id]: {
          status: "success",
          timestamp: new Date().getTime(),
          ...action.data,
        },
      };
    case "SPECIES_FAILURE":
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
