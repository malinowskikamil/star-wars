import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { Layout } from "components";
import { NotFound } from "pages";
import { fetchPeople } from "actions/people";
import { Search, Table, Pagination } from "./components";
import StyledHome from "./styles";

const Home = ({ people, location: { search }, getData }) => {
  const [is_loaded, setLoaded] = useState(false);
  const { status, meta } = people;
  useEffect(() => {
    setLoaded(true);
    if (status === "invalid") {
      getData(queryString.parse(search));
    }
  }, []);

  useEffect(() => {
    if (is_loaded) {
      getData(queryString.parse(search));
    }
  }, [search]);

  if (status === "failure") {
    return <NotFound />;
  }

  return (
    <Layout meta={{ title: "Star Wars", description: "" }}>
      <StyledHome>
        <div className='main-container'>
          <div className='dashboard'>
            <Search />
            <Table />
            <Pagination {...meta} />
          </div>
        </div>
      </StyledHome>
    </Layout>
  );
};

export default connect(
  ({ people }) => ({ people }),
  dispatch => ({ getData: data => dispatch(fetchPeople(data)) })
)(Home);
