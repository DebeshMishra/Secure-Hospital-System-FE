import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import { combineReducers, createStore } from 'redux';
import { sessionService } from 'redux-react-session';

export default configureStore({
  reducer: {
    user: userReducer
  },
});
