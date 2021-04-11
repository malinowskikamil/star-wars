import React from "react";

const StarShips = ({ data }) =>
  data?.length > 0 ? (
    <section className='animated-section'>
      <header>
        <h2 className='basic-info__section-title'>Statki kosmiczne</h2>
      </header>
      <div className='basic-info__grid'>
        {data?.map(
          ({
            model,
            name,
            starship_class,
            cargo_capacity,
            consumables,
            cost_in_credits,
            crew,
            length,
            manufacturer,
            passengers,
            max_atmosphering_speed,
          }) => (
            <div className='grid-item' key={`${name}-${model}`}>
              <p className='name'>
                {name} - {model}
              </p>
              <p>
                <span>Produkcja:</span>
                <span>{manufacturer}</span>
              </p>
              <p>
                <span>Klasa:</span>
                <span>{starship_class}</span>
              </p>
              <p>
                <span>Pojemność:</span>
                <span>{cargo_capacity}</span>
              </p>

              <p>
                <span>Długość:</span>
                <span>{length}</span>
              </p>
              <p>
                <span>Koszt:</span>
                <span>{cost_in_credits}</span>
              </p>
              <p>
                <span>Eksploatacja:</span>
                <span>{consumables}</span>
              </p>
              <p>
                <span>Załoga:</span>
                <span>{crew}</span>
              </p>
              <p>
                <span>Pasażerowie:</span>
                <span>{passengers}</span>
              </p>

              <p>
                <span>Maksymalna prędkość:</span>
                <span>{max_atmosphering_speed}</span>
              </p>
            </div>
          )
        )}
      </div>
    </section>
  ) : null;

export default StarShips;
