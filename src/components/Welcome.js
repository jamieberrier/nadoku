import React from 'react';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button, Heading } from 'react-bulma-components';

const Welcome = () => {
  return (
    <Section id='WelcomeSection'>
      <Heading className='has-text-info'>Welcome to Nadoku!</Heading>
      <Heading heading subtitle size={6} className='has-text-dark'>Solve Sudoku puzzles while relaxing to the sounds of nature</Heading>
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
