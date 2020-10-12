import React from 'react';
import { connect } from 'react-redux'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Button } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js'
import { clearPuzzle } from '../actions/puzzle.js'
import { clearSelectedNumber } from '../actions/selectedNumber.js'

const NewGame = ({ clearDifficulty, clearPuzzle, clearSelectedNumber }) => {
  const handleOnClick = event => {
    clearPuzzle()
    clearDifficulty()
    clearSelectedNumber()
  }

  return (
    <Section>
      <Container>
        <Button 
          color={'dark'}
          fullwidth={true} 
          onClick={handleOnClick} 
        >
          Start New Game
        </Button>
      </Container>
    </Section>
  )
}

export default connect(null, ({ clearDifficulty, clearPuzzle, clearSelectedNumber }))(NewGame);