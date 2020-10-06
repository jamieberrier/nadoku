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
export const login = ({email, password}) => {
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
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data.attributes))
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
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user.data.attributes))
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    // front end
    dispatch(clearCurrentUser())
    // back end
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',  
      method: 'DELETE'
    })
  }
}