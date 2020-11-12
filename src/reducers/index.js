import { combineReducers } from 'redux';
import currentUser from './currentUser.js';
import difficulty from './difficulty.js';
import displayModal from './displayModal.js';
import isSolved from './isSolved.js';
import loginForm from './loginForm.js';
import puzzle from './puzzle.js';
import remaining from './remaining.js';
import selectedNumber from './selectedNumber.js';
import signupForm from './signupForm.js';
import solution from './solution.js';
import sound from './sound.js';

export default combineReducers({
  currentUser,
  difficulty,
  displayModal,
  isSolved,
  loginForm,
  puzzle,
  remaining,
  selectedNumber,
  signupForm,
  solution,
  sound
})