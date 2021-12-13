import Debug from 'debug';

const LogLevel = {
  none: '-',
  all: '*',
  error: 'error',
  info: 'info',
  debug: 'debug',
  warning: 'warning',
};

class Log {
  constructor() {
    this.init = (level) => {
      Debug.enable(level);
    };

    this.error = (...args) => {
      Debug(LogLevel.error)(args.length === 1 ? args[0] : args);
    };

    this.info = (...args) => {
      Debug(LogLevel.info)(args.length === 1 ? args[0] : args);
    };

    this.debug = (...args) => {
      Debug(LogLevel.debug)(args.length === 1 ? args[0] : args);
    };

    this.warn = (...args) => {
      Debug(LogLevel.warning)(args.length === 1 ? args[0] : args);
    };
  }

  LogLevel = LogLevel;
}

export default new Log();
