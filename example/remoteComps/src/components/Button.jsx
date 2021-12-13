import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button className="comps-button" type="button" onClick={onClick}>
    Comps button
  </button>
);

Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
