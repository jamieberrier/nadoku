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
        history.push('/')
      }
    })
    .catch(error => alert(error.message))
  }
}