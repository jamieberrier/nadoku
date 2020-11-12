import { resetLoginForm } from './loginForm';
import { showModal } from './displayModal.js';

// syncronous action creators
export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  }
}

// asyncronous action creators
export const login = ({email, password}, history) => {

  return dispatch => {
    return fetch('http://localhost:3000/api/v1/login', {
      credentials: 'include',  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(user => {
      if (user.error) {
        dispatch(showModal('danger', user.error))
      } else {
        dispatch(setCurrentUser(user.data.attributes))
        dispatch(resetLoginForm())
        if (history) { // Pushes a new entry onto the history stack
          history.push('/options')
        }
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3000/api/v1/get_current_user', {
    credentials: 'include',
    method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(user => {
      if (!!user.data.id) {
        dispatch(setCurrentUser(user.data.attributes))
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  // was getting warning: Form submission canceled because the form is not connected
  // // added event.preventDefault() and it went away
  // replaced ^^ with changing type from submit to button & onSubmit for onClick
  return dispatch => {
    // front end
    dispatch(clearCurrentUser())
    // back end
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',  
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(message => dispatch(showModal('warning', message.notice)))
    .catch(console.log)
  }
}