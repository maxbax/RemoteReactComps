import Log from '../utils/log';

let REMOTE_URL = null;

const init = (remoteUrl) => {
  REMOTE_URL = remoteUrl;
};

const getRemoteUrl = () => {
  if (!REMOTE_URL) {
    Log.warn('MODULE URL NOT INITIALIZATED');
  }
  return REMOTE_URL;
};

export {
  init,
  getRemoteUrl,
};
