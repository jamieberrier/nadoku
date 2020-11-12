import { setCurrentUser } from './currentUser.js';
import { showModal } from './displayModal.js';

export const updateSignupForm = formData => {
  return {
      type: 'UPDATE_SIGNUP_FORM',
      // use shorthand of just formData
      formData
  }
}

export const resetSignupForm = () => {
  return {
      type: 'RESET_SIGNUP_FORM'
  }
}

// asyncronous action creators
export const signup = ({email, username, password, passwordConfirmation}, history) => {
  let bodyData = {
    user: {
      email,
      username,
      password,
      password_confirmation: passwordConfirmation
    }
  }

  let configObj = {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  }

  return dispatch => {
    return fetch('http://localhost:3000/api/v1/users', configObj)
    .then(response => response.json())
    .then(user => {
      if (user.errors) {
        dispatch(showModal('danger', user.errors))
      } else {
        dispatch(setCurrentUser(user.data.attributes))
        dispatch(resetSignupForm())
        dispatch(showModal('info', 
          'Select a puzzle difficulty and a nature sound to start the puzzle. To solve the puzzle: Use the key pad to select a number and click a cell to insert the number. Use your delete key to erase a number.'))
        if (history) { // Pushes a new entry onto the history stack
          history.push('/options')
        }
      }
    })
    .catch(error => alert(error.message))
  }
}