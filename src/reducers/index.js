import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import people from "./people";

export default history =>
  combineReducers({
    people,
    router: connectRouter(history),
  });
