import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NoComp from './NoComp';
import Modules from '../models/modules';

const RemoteComp = ({ name, ...otherProps }) => {
  const [Comp, setComp] = useState(null);

  const getLib = useCallback(() => {
    Modules.getModule().then((exports) => {
      const C = exports[name];
      // eslint-disable-next-line react/jsx-props-no-spreading
      setComp(C ? <C {...otherProps} /> : <NoComp name={name} />);
    });
  }, [name, otherProps]);

  useEffect(() => {
    if (!Comp) getLib();
  }, [Comp, getLib]);

  return Comp;
};

RemoteComp.defaultProps = {
};

RemoteComp.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RemoteComp;
