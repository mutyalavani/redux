import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import actorsReducer from './Reducers/actorsReducer';
import cricketersReducer from './Reducers/cricketersReducer';
import politiciansReducer from './Reducers/politiciansReducer';
import scientistsReducer from './Reducers/scientistsReducer';

let store=createStore(combineReducers
  ({
  actorsReducer,cricketersReducer,politiciansReducer,scientistsReducer
  }))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
