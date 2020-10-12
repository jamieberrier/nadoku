import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser.js';
import difficulty from './reducers/difficulty.js';
import loginForm from './reducers/loginForm.js'
import puzzle from './reducers/puzzle.js';
import selectedNumber from './reducers/selectedNumber.js'

const reducer = combineReducers({
  currentUser,
  difficulty,
  loginForm,
  puzzle,
  selectedNumber
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;