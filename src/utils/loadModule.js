import Log from './log';
import { httpRequest } from './request';

const importModule = (url) => new Promise((resolve) => {
  httpRequest(url)
    .then((data) => {
      const exports = {};
      const module = { exports };
      // eslint-disable-next-line no-new-func
      const func = new Function('module', 'exports', data);
      func(module, exports);
      resolve(module.exports);
    }).catch((e) => {
      Log.error(`IMPORT MODULE ERROR ${e}`);
    });
});

export {
  // eslint-disable-next-line import/prefer-default-export
  importModule,
};
