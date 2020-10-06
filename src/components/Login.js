import React from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/currentUser.js'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { 
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name='email'
        onChange={handleOnChange}
        placeholder='Enter Email Address'
        type='text'
        value={loginFormData.email}
      />
      <input 
        name='password'
        onChange={handleOnChange}
        placeholder='Enter Password'
        type='text'
        value={loginFormData.password}
      />
      <input 
        type='submit'
        value='Log In'
      />
    </form>
  )
}

// get state from store to use as props in this component
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);