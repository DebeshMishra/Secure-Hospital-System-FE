import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import { userReducer } from './features/user';
import store from './app/store';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Add a request interceptor
axios.interceptors.request.use((request) => {
  // Do something before request is sent
  console.log(request);
  if(!request.url.includes('api/auth/login') || !request.url.includes('api/auth/login')){
    request.headers.Authorization = 'Bearer ' + cookies.get('JWTToken');
  }
  return request;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


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
