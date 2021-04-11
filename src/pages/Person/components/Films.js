import React from "react";

const Films = ({ data }) =>
  data?.length > 0 ? (
    <section className='animated-section'>
      <header>
        <h2 className='basic-info__section-title'>Filmy</h2>
      </header>
      <div className='basic-info__grid'>
        {data.map(({ director, producer, release_date, title }) => (
          <div className='grid-item movie'>
            <p className='name'>{title}</p>
            <p>
              <span>Produkcja:</span>
              <span>{producer}</span>
            </p>
            <p>
              <span>Reżyser:</span>
              <span>{director}</span>
            </p>
            <p>
              <span>Data:</span>
              <span>{release_date}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  ) : null;

export default Films;
