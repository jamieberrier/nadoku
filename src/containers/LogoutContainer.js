import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button } from 'react-bulma-components';

import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {

  return (
    <Section>
      <Container id='LogoutContainer'>
        <Link to='/'>
          <Button 
            color={'dark'}
            fullwidth={true} 
            onClick={logout}
          >
            Log Out
          </Button>
        </Link>
      </Container>
    </Section>
  )
}

export default connect(null, { logout })(Logout);