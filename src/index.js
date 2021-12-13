import RemoteComp from './components/RemoteComp';
import { init } from './models/global';
import Log from './utils/log';

Log.init(Log.LogLevel.all);

export {
  init,
};

export default RemoteComp;
