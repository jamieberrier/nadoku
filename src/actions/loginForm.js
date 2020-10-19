export const updateLoginForm = formData => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    // use shorthand of just formData
    formData
  }
}

export const resetLoginForm = () => {
  return {
      type: 'RESET_LOGIN_FORM'
  }
}