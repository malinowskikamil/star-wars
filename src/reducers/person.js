export default (state = {}, action) => {
  switch (action.type) {
    case "PERSON_LOADING":
      return {
        ...state,
        [action.id]: {
          status: "loading",
        },
      };
    case "PERSON_SUCCESS":
      return {
        ...state,
        [action.id]: {
          status: "success",
          ...action.data,
        },
      };
    case "PERSON_FAILURE":
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
