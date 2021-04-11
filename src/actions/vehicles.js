import { api } from "utils/api";

export const fetchVehicles = id => async dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: "VEHICLES_LOADING", id });
    try {
      const { data } = await api.get(`/vehicles/${id}/`);

      dispatch({ type: "VEHICLES_SUCCESS", data, id });
      resolve(data);
    } catch (err) {
      dispatch({ type: "VEHICLES_FAILURE", err: err.message, id });
    }
  });

const shouldFetchVehicles = ({ vehicles }, id) => vehicles?.[id]?.status !== "success";

export const fetchVehiclesIfNeeded = id => (dispatch, getState) =>
  new Promise(resolve => {
    if (shouldFetchVehicles(getState(), id)) {
      resolve(dispatch(fetchVehicles(id)));
    }
    resolve(getState().vehicles?.[id]);
  });
