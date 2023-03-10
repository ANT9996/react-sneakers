import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './scss/media.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <App />
    </Router>
);