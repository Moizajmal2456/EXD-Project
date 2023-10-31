import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/Reducers/counter';
import filterReducer from '../src/Reducers/filter';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    counter: counterReducer,
    filter: filterReducer,
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
