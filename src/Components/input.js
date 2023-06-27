import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = (props) => {
  const { handleChange } = props;
  return (
    <div className="input">
      <input
        type="text"
        className="useinput"
        onChange={handleChange}
        placeholder="SEARCH"
      />
    </div>
  );
};
export default Input;

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
