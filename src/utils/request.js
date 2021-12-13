import Log from './log';

const READEY_STATE = {
  UNSENT: 0,
  OPENED: 1,
  HEADERS_RECEIVED: 2,
  LOADING: 3,
  DONE: 4,
};

const STATUS = {
  OPENED: 0,
  DONE: 200,
};

const httpRequest = (url) => new Promise((resolve, reject) => {
  Log.debug(`REQUEST ${url}`);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== READEY_STATE.DONE) return;
    if (xhr.status === STATUS.DONE) {
      resolve(xhr.responseText);
    } else {
      reject(new Error(`HTTP Error Response: ${xhr.status} ${xhr.statusText} (${url})`));
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
});

export {
  // eslint-disable-next-line import/prefer-default-export
  httpRequest,
};
