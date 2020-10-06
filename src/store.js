import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser.js';
import grid from './reducers/grid.js';
import loginForm from './reducers/loginForm.js'
import users from './reducers/users.js';

const reducer = combineReducers({
  grid,
  users,
  loginForm,
  currentUser
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;