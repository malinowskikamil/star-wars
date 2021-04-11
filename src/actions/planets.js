import { api } from "utils/api";

export const fetchPlanets = id => async dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: "PLANETS_LOADING", id });
    try {
      const { data } = await api.get(`/planets/${id}/`);

      dispatch({ type: "PLANETS_SUCCESS", data, id });
      resolve(data);
    } catch (err) {
      dispatch({ type: "PLANETS_FAILURE", err: err.message, id });
    }
  });

const shouldFetchPlanets = ({ planets }, id) => planets?.[id]?.status !== "success";

export const fetchPlanetsIfNeeded = id => (dispatch, getState) =>
  new Promise(resolve => {
    if (shouldFetchPlanets(getState(), id)) {
      resolve(dispatch(fetchPlanets(id)));
    }
    resolve(getState().planets?.[id]);
  });
