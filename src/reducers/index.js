import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import people from "./people";
import person from "./person";
import species from "./species";
import planets from "./planets";
import films from "./films";
import vehicles from "./vehicles";
import starships from "./starships";

export default history =>
  combineReducers({
    people,
    person,
    species,
    planets,
    films,
    vehicles,
    starships,
    router: connectRouter(history),
  });
