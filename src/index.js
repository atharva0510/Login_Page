import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Font-awesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

// bootstrap css
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// bootstrap js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);