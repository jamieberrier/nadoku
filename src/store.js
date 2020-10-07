import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser.js';
import puzzle from './reducers/puzzle.js';
import loginForm from './reducers/loginForm.js'

const reducer = combineReducers({
  puzzle,
  loginForm,
  currentUser
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;