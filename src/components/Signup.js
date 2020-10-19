import React from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions/signupForm.js'
import { updateSignupForm, resetSignupForm } from '../actions/signupForm.js'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { 
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signup(signupFormData)
    resetSignupForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name='email'
        onChange={handleOnChange}
        placeholder='Enter Email Address'
        type='text'
        value={signupFormData.email}
      />
      <input 
        name='password'
        onChange={handleOnChange}
        placeholder='Enter Password'
        type='text'
        value={signupFormData.password}
      />
      <input 
        name='passwordConfirmation'
        onChange={handleOnChange}
        placeholder='Re-enter Password'
        type='text'
        value={signupFormData.passwordConfirmation}
      />
      <input 
        type='submit'
        value='Sign Up'
      />
    </form>
  )
}

// get state from store to use as props in this component
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);