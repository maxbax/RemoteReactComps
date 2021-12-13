import Module from './module';

const MOD_PREFIX = 'mod_';

class Modules {
  constructor() {
    this.modules = {};
  }

  getModule(name = '') {
    let module;
    if (this.modules[MOD_PREFIX + name]) {
      module = this.modules[MOD_PREFIX + name];
    } else {
      module = new Module(name);
      this.modules[MOD_PREFIX + name] = module;
    }
    return module.getModule();
  }
}

export default new Modules();
