import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './components/Container';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container></Container>
  </React.StrictMode>
);

reportWebVitals();
