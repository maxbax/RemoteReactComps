import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url }) => (
  <a href={url}>Comps link to {url}</a>
);

Link.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Link;
