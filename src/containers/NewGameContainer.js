import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearIsSolved } from '../actions/isSolved.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { clearSolution } from '../actions/solution.js';
import ButtonFullWidth from '../components/ButtonFullWidth.js';

const NewGameContainer = ({ clearDifficulty, clearIsSolved, clearPuzzle, clearSelectedNumber, clearSolution }) => {

  const handleOnClick = () => {
    clearDifficulty()
    clearSolution()
    clearPuzzle()
    clearSelectedNumber()
    clearIsSolved()
  }

  return (
    <Section id='NewGameSection'>
      <Container id='NewGameContainer'>
        <Link to='/'>
          <ButtonFullWidth 
          color={'dark'} 
          text={'Start New Game'} 
          handleOnClick={handleOnClick} 
        />
        </Link>        
      </Container>
    </Section>
  )
}

export default connect(null, ({ clearDifficulty, clearIsSolved, clearPuzzle, clearSelectedNumber, clearSolution }))(NewGameContainer);