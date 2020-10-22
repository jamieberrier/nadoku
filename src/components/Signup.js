import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Form, Section } from 'react-bulma-components';

import { resetSignupForm, signup, updateSignupForm } from '../actions/signupForm.js';
import ButtonFullWidth from './ButtonFullWidth';

const { Input, Field, Control, Label } = Form;

const Signup = ({ history, signupFormData, resetSignupForm, signup, updateSignupForm }) => {

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
    signup(signupFormData, history)
    resetSignupForm()
  }

  const handleOnClick = () => {
    resetSignupForm()
  }

  return (
    <Section id='SignupSection'>
      <Container id='SignupContainer'>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input 
              name='email'
              onChange={handleOnChange}
              placeholder='Enter Email Address'
              type='text'
              value={signupFormData.email}
            />
          </Control>
        </Field>
        <Field>
          <Label>Password</Label>
          <Control>
            <Input 
              name='password'
              onChange={handleOnChange}
              placeholder='Enter Password'
              type='password'
              value={signupFormData.password}
            />
          </Control>
        </Field>
        <Field>
          <Label>Password Confirmation</Label>
          <Control>
            <Input 
              name='passwordConfirmation'
              onChange={handleOnChange}
              placeholder='Re-enter Password'
              type='password'
              value={signupFormData.passwordConfirmation}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <ButtonFullWidth color={'dark'} text={'Sign Up'} handleOnClick={handleSubmit} />
          </Control>
        </Field>
        <Field>
          <Control>
            <Link to='/'>
              <ButtonFullWidth color={'danger'} outlined={true} text={'Cancel'} handleOnClick={handleOnClick} />
            </Link>
          </Control>
        </Field>
      </Container>
    </Section>
  )
}

// get state from store to use as props in this component
const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { signup, resetSignupForm, updateSignupForm })(Signup);