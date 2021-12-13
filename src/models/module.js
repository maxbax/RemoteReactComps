import { importModule } from '../utils/loadModule';
import { getRemoteUrl } from './global';

const MODULE_STATE = {
  INIT: 0,
  LOADING: 1,
  LOADED: 2,
};

class Module {
  constructor(name = '') {
    this.name = name;
    this.module = null;
    this.state = MODULE_STATE.INIT;
    this.waitings = [];

    this.init = (callBack) => {
      if (this.state === MODULE_STATE.INIT) {
        this.state = MODULE_STATE.LOADING;
        importModule(getRemoteUrl())
          .then((exports) => {
            this.state = MODULE_STATE.LOADED;
            this.module = exports;
            callBack(exports);
            if (this.waitings.length > 0) {
              this.waitings.forEach((cB) => cB(exports));
              this.waitings = [];
            }
          });
      } else if (this.state === MODULE_STATE.LOADED) {
        callBack(this.module);
      } else {
        this.waitings.push(callBack);
      }
    };

    this.getModule = () => new Promise((resolve) => {
      if (this.module) {
        resolve(this.module);
      } else {
        this.init((exports) => {
          resolve(exports);
        });
      }
    });
  }
}

export default Module;
