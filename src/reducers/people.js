export default (
  state = {
    status: "invalid",
    results: [],
  },
  action
) => {
  switch (action.type) {
    case "PEOPLE_LOADING":
      return {
        ...state,
        status: "loading",
      };
    case "PEOPLE_SUCCESS":
      return {
        ...state,
        status: "success",
        ...action.data,
      };
    case "PEOPLE_FAILURE":
      return {
        ...state,
        status: "failure",
        err: action.err,
      };
    default:
      return state;
  }
};
