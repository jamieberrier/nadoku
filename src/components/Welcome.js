import React from 'react';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button, Heading } from 'react-bulma-components';

const Welcome = () => {
  return (
    <Section>
      <Heading size={5}>Welcome to Nadoku!</Heading>
      <Container>
        <Button.Group position={'centered'}>
          <Link to='/login'>
            <Button color={'success'}>Log In</Button>
          </Link>
          <Link to='/signup'>
            <Button color={'primary'}>Sign Up</Button>
          </Link>
        </Button.Group>
      </Container>
    </Section>
  )
}

export default Welcome;
