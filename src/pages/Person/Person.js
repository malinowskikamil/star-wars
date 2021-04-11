import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Layout, Loader } from "components";
import { NotFound } from "pages";
import { fetchPersonIfNeeded } from "actions/person";
import { MainInfo, HomeWorld, Species, StarShips, Vehicles, Films } from "./components";
import { createPersonIdentifier } from "utils/helpers";
import StyledPerson from "./styles";

const Person = ({
  person,
  match: {
    params: { id },
  },
  getData,
}) => {
  const [favorites, setFavorite] = useState([]);
  const [is_loaded, setLoaded] = useState(false);
  useEffect(() => {
    getData(id);
    const favorites_ls = JSON.parse(window.localStorage.getItem("favorites")) || [];
    setFavorite(favorites_ls);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (is_loaded) {
      window.localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);
  const current_person = person?.[id];
  if (!current_person || current_person.status === "loading") {
    return <Loader />;
  }
  if (current_person === "failure") {
    return <NotFound />;
  }
  const identifier = createPersonIdentifier({ name: current_person.name, height: current_person.height, eye_color: current_person.eye_color });
  const is_favorite = favorites?.includes(identifier);

  const species = current_person?.species?.[0];
  return (
    <Layout meta={{ title: `${current_person?.name} - Star Wars`, description: "" }}>
      <StyledPerson>
        <div className='main-container'>
          <div className='dashboard'>
            <div className='topline'>
              <Link to='/' className='btn-back'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 492 492'>
                  <path
                    fill='#ffe81f'
                    d='M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z'
                  />
                </svg>
              </Link>
              <button
                type='button'
                className={`btn-favorite ${is_favorite ? "fill" : ""}`}
                onClick={() => (is_favorite ? setFavorite(favorites.filter(item => item !== identifier)) : setFavorite([...favorites, identifier]))}
              >
                <svg height='20px' viewBox='0 -10 511.98685 511' width='20px' xmlns='http://www.w3.org/2000/svg'>
                  <path d='m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0' />
                </svg>
              </button>
            </div>
            <div className='basic-info'>
              <MainInfo data={current_person} />
              <div className='wrapper'>
                <HomeWorld data={current_person?.homeworld} />
                {species && <Species data={species} />}
              </div>
              <StarShips data={current_person?.starships} />
              <Vehicles data={current_person?.vehicles} />
              <Films data={current_person?.films} />
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
