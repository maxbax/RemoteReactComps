import React from 'react';
import PropTypes from 'prop-types';

const NoComp = ({ name }) => (
  <div>
    Nessun componente trovato con il nome
    {' '}
    {name}
  </div>
);

NoComp.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NoComp;
