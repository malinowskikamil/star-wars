import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Layout, Loader } from "components";
import { NotFound } from "pages";
import { fetchPersonIfNeeded } from "actions/person";
import { MainInfo, HomeWorld, Species } from "./components";

import StyledPerson from "./styles";

const Person = ({
  person,
  match: {
    params: { id },
  },
  getData,
}) => {
  useEffect(() => {
    getData(id);
  }, []);

  const current_person = person?.[id];
  if (!current_person || current_person.status === "loading") {
    return <Loader />;
  }
  if (current_person === "failure") {
    return <NotFound />;
  }
  const species = current_person?.species?.[0];
  return (
    <Layout meta={{ title: `${current_person?.name} - Star Wars`, description: "" }}>
      <StyledPerson>
        <div className='main-container'>
          <div className='dashboard'>
            <div className='basic-info'>
              <MainInfo data={current_person} />
              <div className='wrapper'>
                <HomeWorld data={current_person?.homeworld} />
                {species && <Species data={species} />}
              </div>
            </div>
          </div>
        </div>
      </StyledPerson>
    </Layout>
  );
};

export default connect(
  ({ person }) => ({ person }),
  dispatch => ({ getData: id => dispatch(fetchPersonIfNeeded(id)) })
)(Person);
