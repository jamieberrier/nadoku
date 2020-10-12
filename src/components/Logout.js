import React from 'react';
import { connect } from 'react-redux'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button } from 'react-bulma-components';

import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {

  return (
    <Section>
      <Container>
        <Button 
          color={'dark'}
          fullwidth={true} 
          onClick={logout} 
          size={'small'} 
        >
          Log Out
        </Button>
      </Container>
    </Section>
  )
}

export default connect(null, { logout })(Logout);