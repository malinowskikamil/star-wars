import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import people from "./people";
import person from "./person";

export default history =>
  combineReducers({
    people,
    person,
    router: connectRouter(history),
  });
