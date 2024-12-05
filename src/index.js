import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { cartStore } from './Components/Redux/cartStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={cartStore}>
      <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
