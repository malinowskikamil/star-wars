import { api } from "utils/api";
import { createPersonIdentifier } from "utils/helpers";

const getDetailsData = async urls => {
  if (typeof urls === "object") {
    return urls?.length > 0 ? await Promise.all(urls.map(url => api.get(url.replace("http://swapi.dev/api", "")).then(({ data }) => data))) : [];
  }
  return await api.get(urls.replace("http://swapi.dev/api", "")).then(({ data }) => data);
};

export const fetchPerson = id => async dispatch => {
  dispatch({ type: "PERSON_LOADING", id });
  try {
    const { data } = await api.get(`/people/${id}/`);
    data.homeworld = await getDetailsData(data.homeworld);
    data.films = await getDetailsData(data.films);
    data.species = await getDetailsData(data.species);
    data.vehicles = await getDetailsData(data.vehicles);
    data.starships = await getDetailsData(data.starships);

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
