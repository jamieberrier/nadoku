import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section } from 'react-bulma-components';

import { generatePuzzle } from '../actions/puzzle.js';
import ButtonFullWidth from '../components/ButtonFullWidth';
import SoundContainer from './SoundContainer.js';
import DifficultyContainer from './DifficultyContainer.js';

const OptionsContainer = ({ difficulty, generatePuzzle }) => {
  const handleOnClick = () => {
    generatePuzzle(difficulty)
  }

  return(
    <>
      <SoundContainer />
      <DifficultyContainer />
      <Section>
        <Link to='/puzzle'>
          <ButtonFullWidth 
            color={'success'} 
            text={'Start Puzzle'} 
            handleOnClick={handleOnClick} 
          />
        </Link>
      </Section>
    </>
  )
}

const mapStateToProps = ({ difficulty }) => {
  return {
    difficulty
  }
}

export default connect(mapStateToProps, { generatePuzzle })(OptionsContainer);