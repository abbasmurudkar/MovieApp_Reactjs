import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; 
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>    {/* it is used for using the app.js as main page instead router write this in index.js */}
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();