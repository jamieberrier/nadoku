import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Form } from 'react-bulma-components';

import { login } from '../actions/currentUser.js';
import { updateLoginForm, resetLoginForm} from '../actions/loginForm.js';
import ButtonFullWidth from '../components/ButtonFullWidth'

const { Input, Field, Control, Label } = Form;
class LoginContainer extends Component {

  handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { 
      ...this.props.loginFormData,
      [name]: value
    }
    this.props.updateLoginForm(updatedFormInfo)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.props.loginFormData, this.props.history)
    this.props.resetLoginForm()
  }

  render() {
    return (
      <Section id='LoginSection'>
        <Container id='LoginContainer'>
          <Field>
            <Label>Email</Label>
            <Control>
              <Input 
                name='email'
                onChange={this.handleOnChange}
                placeholder='Enter Email Address'
                type='text'
                value={this.props.loginFormData.email}
              />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input 
                name='password'
                onChange={this.handleOnChange}
                placeholder='Enter Password'
                type='password'
                value={this.props.loginFormData.password}
              />
            </Control>
          </Field>
          <Field>
            <Control>
              <ButtonFullWidth color={'dark'} text={'Log In'} handleOnClick={this.handleSubmit} />
            </Control>
          </Field>
        </Container>
      </Section>
    )
  }
}

// get state from store to use as props in this component
const mapStateToProps = ({ loginForm }) => {
  return {
    loginFormData: loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login, resetLoginForm })(LoginContainer);