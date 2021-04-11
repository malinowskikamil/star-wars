import { api } from "utils/api";
import { fetchSpeciesIfNeeded } from "./species";
import { fetchPlanetsIfNeeded } from "./planets";
import { fetchFilmsIfNeeded } from "./films";
import { fetchVehiclesIfNeeded } from "./vehicles";
import { fetchStarshipsIfNeeded } from "./starships";

export const fetchPerson = id => async (dispatch, getState) => {
  const { people } = getState();

  dispatch({ type: "PERSON_LOADING", id });
  try {
    const { data } = await api.get(`/people/${id}/`);
    data.homeworld = await dispatch(fetchPlanetsIfNeeded(data.homeworld.match(/\d+/)?.[0]));
    data.films = await Promise.all(data.films.map(url => dispatch(fetchFilmsIfNeeded(url.match(/\d+/)?.[0]))));
    data.species = await Promise.all(data.species.map(url => dispatch(fetchSpeciesIfNeeded(url.match(/\d+/)?.[0]))));
    data.vehicles = await Promise.all(data.vehicles.map(url => dispatch(fetchVehiclesIfNeeded(url.match(/\d+/)?.[0]))));
    data.starships = await Promise.all(data.starships.map(url => dispatch(fetchStarshipsIfNeeded(url.match(/\d+/)?.[0]))));
    dispatch({ type: "PERSON_SUCCESS", data, id });
  } catch (err) {
    dispatch({ type: "PERSON_FAILURE", err: err.message, id });
  }
};

const shouldFetchPerson = ({ person }, id) => person?.[id]?.status !== "success";

export const fetchPersonIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchPerson(getState(), id)) return dispatch(fetchPerson(id));
  return null;
};
