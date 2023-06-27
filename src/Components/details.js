import React from 'react';
import './details.css';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { country } = location.state;

  return (
    <>
      {country.map((country) => (
        <div key={country.capital}>
          <div className="all">
            <div className="img">
              <img className="flag" alt="a flag" src={country.flags.png} />
            </div>

            <div className="theinfo">
              <h2>
                Subregion:
                {country.subregion}
              </h2>
              <h2>
                TimeZones:
                {country.timezones}
              </h2>
              <h2>
                Population:
                {country.population}
              </h2>
              <h2>
                Sub-Region:
                {country.subregion}
              </h2>
              <h2>
                Region:
                {country.region}
              </h2>
            </div>
          </div>
        </div>

      ))}
    </>
  );
};
export default Details;
