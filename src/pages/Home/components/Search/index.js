import React, { useState } from "react";
import queryString from "query-string";
import { withRouter } from "react-router";
import StyledSearch from "./styles";

let timer = 300;

const Search = ({ location, history }) => {
  const query = queryString.parse(location.search);
  const [value, setValue] = useState(query.search || "");
  return (
    <StyledSearch>
      <input
        type='text'
        placeholder='Wyszukaj'
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          clearTimeout(timer);
          timer = setTimeout(() => {
            history.push(`?${queryString.stringify({ ...query, page: undefined, search: target.value })}`);
          }, 300);
        }}
      />
    </StyledSearch>
  );
};

export default withRouter(Search);
