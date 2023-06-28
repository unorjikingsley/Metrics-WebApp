import React from 'react';
import PropTypes from 'prop-types';
import './input.css';
import { Link } from 'react-router-dom';
import icons from './images/icons.svg';

const Input = (props) => {
  const { handleChange } = props;
  return (
    <div className="whole">
      <Link to="/">
        <div>
          <svg className="back-arrow">
            <use
              className="white"
              xlinkHref={`${icons}#icon-chevron-left`}
            />
          </svg>
        </div>
      </Link>
      <div className="input">
        <input
          type="text"
          className="useinput"
          onChange={handleChange}
          placeholder="SEARCH"
        />
      </div>
      <div className="next-head">
        <svg className="mic-setting">
          <use className="white" xlinkHref={`${icons}#icon-microphone`} />
        </svg>
        <svg className="mic-setting">
          <use className="white" xlinkHref={`${icons}#icon-settings`} />
        </svg>
      </div>
    </div>
  );
};
export default Input;

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
