import axios from "axios";

const baseURL = "https://swapi.dev/api";

export const api = axios.create({
  baseURL,
});

export const createMeta = ({ count, page, limit }) => {
  const total_pages = Math.ceil(count / limit);
  const has_prev = page - 1 > 0;
  const has_next = page + 1 <= total_pages;

  return {
    current_page: page,
    next: has_next ? page + 1 : null,
    prev: has_prev ? page - 1 : null,
    has_prev,
    has_next,
    count,
    total_pages,
  };
};
