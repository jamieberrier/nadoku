import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';

const NewGameContainer = ({ clearDifficulty, clearPuzzle, clearSelectedNumber }) => {

  const handleOnClick = event => {
    clearPuzzle()
    clearDifficulty()
    clearSelectedNumber()
  }

  return (
    <Section>
      <Container id='NewGameContainer'>
       <Link to='/'>
        <Button 
          color={'dark'}
          fullwidth={true} 
          onClick={handleOnClick} 
        >
          Start New Game
        </Button>
       </Link>        
      </Container>
    </Section>
  )
}

export default connect(null, ({ clearDifficulty, clearPuzzle, clearSelectedNumber }))(NewGameContainer);