import { api } from "utils/api";

export const fetchFilms = id => async dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({ type: "FILMS_LOADING", id });
    try {
      const { data } = await api.get(`/films/${id}/`);

      dispatch({ type: "FILMS_SUCCESS", data, id });
      resolve(data);
    } catch (err) {
      dispatch({ type: "FILMS_FAILURE", err: err.message, id });
    }
  });

const shouldFetchFilms = ({ films }, id) => films?.[id]?.status !== "success";

export const fetchFilmsIfNeeded = id => (dispatch, getState) =>
  new Promise(resolve => {
    if (shouldFetchFilms(getState(), id)) {
      resolve(dispatch(fetchFilms(id)));
    }
    resolve(getState().films?.[id]);
  });
