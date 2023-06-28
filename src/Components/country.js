import React from 'react';
import PropTypes from 'prop-types';
import './country.css';
import Icon from 'react-icons-kit';
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';

function Country({
  capital, name, flags, population, region, handleClick,
}) {
  return (
    <button type="button" onClick={handleClick}>
      <div className="arrow">
        <i className="fa-solid fa-circle-arrow-right arrow white" />
      </div>
      <div className="sec">
        <h4 className="back-text">Click to see more stats</h4>
        <Icon icon={longArrowRight} size={20} />
      </div>

      <div className="flags">
        <img className="graphics" src={flags} alt="a country's graphic rep" />
        <div className="details">
          <h2 className="countryname color">{name}</h2>
          <h3 className="color">
            {' '}
            Capital :
            {' '}
            {capital}
          </h3>
          <h3 className="color">
            {' '}
            Population :
            {' '}
            {population}
          </h3>
          <h3 className="color">
            {' '}
            Region :
            {' '}
            {region}
          </h3>
        </div>
      </div>
    </button>
  );
}

Country.propTypes = {
  capital: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flags: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Country;
