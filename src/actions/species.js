import { api } from "utils/api";

export const fetchSpecies = id => async dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: "SPECIES_LOADING", id });
    try {
      const { data } = await api.get(`/species/${id}/`);

      dispatch({ type: "SPECIES_SUCCESS", data, id });
      resolve(data);
    } catch (err) {
      dispatch({ type: "SPECIES_FAILURE", err: err.message, id });
    }
  });

const shouldFetchSpecies = ({ species }, id) => species?.[id]?.status !== "success";

export const fetchSpeciesIfNeeded = id => (dispatch, getState) =>
  new Promise(resolve => {
    if (shouldFetchSpecies(getState(), id)) {
      resolve(dispatch(fetchSpecies(id)));
    }
    resolve(getState().species?.[id]);
  });
