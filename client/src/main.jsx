import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {persistor, store} from './redux/store.js';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ShopContextProvider from './Context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ShopContextProvider>
    <App />
  </ShopContextProvider>,
    </PersistGate>
  </Provider>,
);
