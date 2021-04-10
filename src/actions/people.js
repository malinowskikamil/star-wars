import { api, createMeta } from "utils/api";
import { createPersonIdentifier } from "utils/helpers";

const createApiPagination = (page, limit) => {
  const api_limit = 10;
  let offset = (page - 1) * limit;
  const rest = page === 1 ? 10 : api_limit - (offset % api_limit);
  let api_page = Math.ceil((offset + 1) / 10);
  let arr = [{ from: 0, to: 10, page: api_page }];
  limit = limit - rest;
  if (limit > 0) {
    do {
      api_page++;
      if (limit > 10) {
        arr.push({ from: 0, to: 10, page: api_page });
      } else {
        arr.push({ from: 0, to: limit, page: api_page });
      }
      limit = limit - 10;
    } while (limit > 0);
  }

  return arr;
};

export const fetchPeople = ({ page = 1, limit = 10, search = null }) => async dispatch => {
  dispatch({ type: "PEOPLE_LOADING" });
  let count = 0;
  let index = 0;
  let results = [];
  let stop = false;
  const pagination_arr = createApiPagination(Number(page), Number(limit));
  try {
    do {
      const { page, from, to } = pagination_arr[index];
      const { data } = await api.get(`/people/?page=${page}${search ? `&search=${search}` : ""}`);
      results = [...results, ...data.results];
      count = data.count;
      index++;
      if (!pagination_arr[index] || !data.next) {
        stop = true;
      }
    } while (!stop);

    results = results.map(item => ({
      ...item,
      is_favorite: false,
      id: item.url.match(/\d+/)?.[0],
      species: item.species.map(spec => spec.match(/\d+/)?.[0]),
      identifier: createPersonIdentifier({ name: item.name, height: item.height, eye_color: item.eye_color }),
    }));

    let all_species_ids = [];
    results.forEach(({ species }) => {
      species.forEach(spec => {
        if (!all_species_ids.includes(spec)) {
          all_species_ids.push(spec);
        }
      });
    });
    const all_species = await Promise.all(
      all_species_ids.map(
        spec =>
          new Promise(async resolve => {
            const { data } = await api.get(`/species/${spec}/`);
            resolve({ ...data, id: spec });
          })
      )
    );
    results = results.map(item => ({
      ...item,
      species: item.species?.length > 0 ? item.species.map(spec => all_species.find(({ id }) => id === spec)) : [],
    }));
    const meta = createMeta({ count, page: Number(page), limit: Number(limit) });
    dispatch({ type: "PEOPLE_SUCCESS", data: { results, meta } });
  } catch (err) {
    dispatch({ type: "PEOPLE_FAILURE", err: err.message });
  }
};
const shouldFetchPeople = ({ home }) => people.status !== "success";

export const fetchPeopleIfNeed = query => (dispatch, getState) =>
  new Promise(resolve => {
    if (shouldFetchPeople(getState())) return resolve(dispatch(fetchPeople(query)));
    return resolve(null);
  });
