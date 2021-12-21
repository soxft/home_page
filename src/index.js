import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
  return <>
    <h1>HelloWorld</h1>
  </>;
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
