import React from 'react';
import ReactDOM from 'react-dom';
import { init } from 'remote-react-comps';
import App from './App';

init('http://localhost:8082/comps');

ReactDOM.render(<App />, document.getElementById('root'));
