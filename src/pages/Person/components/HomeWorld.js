import React from "react";

const HomeWorld = ({ data }) => {
  return (
    <section className='animated-section'>
      <header>
        <h2 className='basic-info__section-title'>Pochodzenie</h2>
        <ul className='basic-info__list'>
          <li>
            <span>Nazwa:</span>
            <span>{data?.name}</span>
          </li>
          <li>
            <span>Klimat:</span>
            <span>{data?.climate}</span>
          </li>
          <li>
            <span>Średnica:</span>
            <span>{data?.diameter}</span>
          </li>
          <li>
            <span>Grawitacja:</span>
            <span>{data?.gravity}</span>
          </li>
          <li>
            <span>Okres orbitalny:</span>
            <span>{data?.orbital_period}</span>
          </li>
          <li>
            <span>Okres obrotu:</span>
            <span>{data?.rotation_period}</span>
          </li>
          <li>
            <span>Populacja:</span>
            <span>{data?.population}</span>
          </li>
          <li>
            <span>Powierzchnia wody:</span>
            <span>{data?.surface_water}</span>
          </li>
          <li>
            <span>Teren:</span>
            <span>{data?.terrain}</span>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default HomeWorld;
