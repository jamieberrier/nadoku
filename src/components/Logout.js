import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearPuzzleRaw } from '../actions/puzzleRaw.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { clearSolution } from '../actions/solution.js';
import { logout } from '../actions/currentUser.js';
import ButtonFullWidth from './ButtonFullWidth.js';

const Logout = ({ clearDifficulty,  clearPuzzle, clearPuzzleRaw, clearSelectedNumber, clearSolution, logout }) => {

  const handleOnClick = () => {
    clearDifficulty()
    clearPuzzleRaw()
    clearSolution()
    clearPuzzle()
    clearSelectedNumber()
    logout()
  }
  
  return (
    <Section id='LogoutSection'>
      <Container id='LogoutContainer'>
        <Link to='/'>
          <ButtonFullWidth text={'Log Out'} color={'dark'} handleOnClick={handleOnClick} />
        </Link>
      </Container>
    </Section>
  )
}

export default connect(null, { clearDifficulty,  clearPuzzle, clearPuzzleRaw, clearSelectedNumber, clearSolution, logout })(Logout);