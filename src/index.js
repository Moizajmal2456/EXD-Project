import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/Components/Counter/counter';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>
);

reportWebVitals();
