import React from 'react';
import { connect } from 'react-redux'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {

  return (
    <Button onClick={logout} size={'small'} fullwidth={true} color={'white'}>Log Out</Button>
  )
}

export default connect(null, { logout })(Logout);