import React from 'react';
import RemoteComp from 'remote-react-comps';

const App = () => (
  <>
    <h1>Remote-react-comps example</h1>
    <RemoteComp name="Button" onClick={() => { console.log('CLICK'); }} />
    <br />
    <RemoteComp name="Link" url="http://myurl" />
  </>
);

export default App;
