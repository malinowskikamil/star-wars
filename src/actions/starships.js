import { api } from "utils/api";
import { checkTimestamp } from "utils/helpers";

export const fetchStarships = id => async dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: "STARSHIPS_LOADING", id });
    try {
      const { data } = await api.get(`/starships/${id}/`);

      dispatch({ type: "STARSHIPS_SUCCESS", data, id });
      resolve(data);
    } catch (err) {
      dispatch({ type: "STARSHIPS_FAILURE", err: err.message, id });
    }
  });

const shouldFetchStarships = ({ starships }, id) => starships?.[id]?.status !== "success" || checkTimestamp(starships?.[id].timestamp);

export const fetchStarshipsIfNeeded = id => (dispatch, getState) =>
  new Promise(resolve => {
    if (shouldFetchStarships(getState(), id)) {
      resolve(dispatch(fetchStarships(id)));
    }
    resolve(getState().starships?.[id]);
  });
