export default (state = {}, action) => {
  switch (action.type) {
    case "VEHICLES_LOADING":
      return {
        ...state,
        [action.id]: {
          status: "loading",
        },
      };
    case "VEHICLES_SUCCESS":
      return {
        ...state,
        [action.id]: {
          status: "success",
          ...action.data,
        },
      };
    case "VEHICLES_FAILURE":
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
