import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client en lugar de react-dom
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Utiliza createRoot desde react-dom/client
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
