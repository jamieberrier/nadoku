import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Form, Section } from 'react-bulma-components';

import { login } from '../actions/currentUser.js';
import { updateLoginForm, resetLoginForm} from '../actions/loginForm.js';
import ButtonFullWidth from './ButtonFullWidth';

const { Input, Field, Control, Label } = Form;

const Login = ({ history, loginFormData, login, resetLoginForm, updateLoginForm }) => {

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { 
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  const handleOnClick = () => {
    resetLoginForm()
  }

  return (
    <Section id='LoginSection'>
      <Container id='LoginContainer'>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input 
              name='email'
              onChange={handleOnChange}
              placeholder='Enter Email Address'
              type='text'
              value={loginFormData.email}
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
              value={loginFormData.password}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <ButtonFullWidth color={'dark'} text={'Log In'} handleOnClick={handleSubmit} />
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
const mapStateToProps = ({ loginForm }) => {
  return {
    loginFormData: loginForm
  }
}

export default connect(mapStateToProps, { login, resetLoginForm, updateLoginForm })(Login);