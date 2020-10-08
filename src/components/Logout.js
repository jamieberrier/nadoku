import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import Button from './Button.js';

const Logout = ({ logout }) => {

  return (
    <Button text={'Log Out'} handleOnClick={logout} />
  )
}

export default connect(null, { logout })(Logout);