import React from 'react';
import { hydrate, render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}
