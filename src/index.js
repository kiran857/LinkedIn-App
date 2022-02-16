import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {storelinkedIn} from "./app/store"
import App from './App';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "@reduxjs/toolkit"

const store = createStore(() => [], {}, applyMiddleware());
ReactDOM.render(
  
  <Provider  store={storelinkedIn}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

