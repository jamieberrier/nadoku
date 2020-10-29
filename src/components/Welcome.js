import React from 'react';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button, Heading } from 'react-bulma-components';

const Welcome = () => {
  return (
    <Section id='WelcomeSection'>
      <Heading className='has-text-info'>Welcome to Nadoku!</Heading>
      <Heading subtitle>Please Log In or Sign Up</Heading>
      <Container id='WelcomeContainer'>
        <Button.Group position={'centered'}>
          <Link to='/login'>
            <Button color={'info'}>Log In</Button>
          </Link>
          <Link to='/signup'>
            <Button color={'info'} outlined={true}>Sign Up</Button>
          </Link>
        </Button.Group>
      </Container>
    </Section>
  )
}

export default Welcome;
