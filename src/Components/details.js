import React from 'react';
import './details.css';
import { useLocation, Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon/circleLeft';

const Details = () => {
  const location = useLocation();
  const { country } = location.state;

  return (
    <>
      {country.map((country) => (
        <div key={country.capital}>
          <div className="all">
            <div className="icon-btn">
              <Link to="/" className="back-icon">
                <Icon icon={circleLeft} size={20} />
                <h4 className="back-text">Back to Home Page</h4>
              </Link>
            </div>
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
