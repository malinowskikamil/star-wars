import React from "react";

const Species = ({ data }) => {
  return (
    <section className="animated-section">
      <header>
        <h2 className='basic-info__section-title'>Gatunek</h2>
        <ul className='basic-info__list'>
          <li>
            <span>Nazwa:</span>
            <span>{data?.name}</span>
          </li>
          <li>
            <span>Klasyfikacja:</span>
            <span>{data?.classification}</span>
          </li>
          <li>
            <span>Język:</span>
            <span>{data?.language}</span>
          </li>
          <li>
            <span>Średni wzrost:</span>
            <span>{data?.average_height}</span>
          </li>
          <li>
            <span>Średnia długość życia:</span>
            <span>{data?.average_lifespan}</span>
          </li>
          <li>
            <span>Kolor skóry:</span>
            <span>{data?.skin_colors}</span>
          </li>
          <li>
            <span>Kolor oczu:</span>
            <span>{data?.eye_colors}</span>
          </li>
          <li>
            <span>Kolor włosów:</span>
            <span>{data?.hair_colors}</span>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Species;
