import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from './store';

const store = configureStore();

const providerWrapper = () =>
  (
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  );

ReactDOM.render(providerWrapper(), document.getElementById('app'));
