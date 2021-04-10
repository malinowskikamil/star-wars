import React from "react";

const MainInfo = ({ data }) => {
  return (
    <section>
      <header>
        <h1 className='basic-info__name'>{data?.name}</h1>
      </header>
      <ul className='basic-info__list'>
        <li>
          <span>Wzrost:</span>
          <span>{data?.height}</span>
        </li>
        <li>
          <span>Waga:</span>
          <span>{data?.mass}</span>
        </li>
        <li>
          <span>Data urodzenia:</span>
          <span>{data?.birth_year}</span>
        </li>
        <li>
          <span>Płeć:</span>
          <span>{data?.gender}</span>
        </li>
        <li>
          <span>Kolor skóry:</span>
          <span>{data?.skin_color}</span>
        </li>
        <li>
          <span>Kolor oczu:</span>
          <span>{data?.eye_color}</span>
        </li>
        <li>
          <span>Kolor włosów:</span>
          <span>{data?.hair_color}</span>
        </li>
      </ul>
    </section>
  );
};

export default MainInfo;
