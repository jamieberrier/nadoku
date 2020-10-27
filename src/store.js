import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import currentUser from './reducers/currentUser.js';
import difficulty from './reducers/difficulty.js';
import displayModal from './reducers/displayModal.js';
import isSolved from './reducers/isSolved.js';
import loginForm from './reducers/loginForm.js';
import puzzle from './reducers/puzzle.js';
import selectedNumber from './reducers/selectedNumber.js';
import signupForm from './reducers/signupForm.js';
import solution from './reducers/solution.js';
import sound from './reducers/sound.js';

const reducer = combineReducers({
  currentUser,
  difficulty,
  displayModal,
  isSolved,
  loginForm,
  puzzle,
  selectedNumber,
  signupForm,
  solution,
  sound
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;