import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearPuzzleRaw } from '../actions/puzzleRaw.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { clearSolution } from '../actions/solution.js';
import ButtonFullWidth from '../components/ButtonFullWidth.js';

class NewGameContainer extends Component {

  handleOnClick = () => {
    this.props.clearDifficulty()
    this.props.clearPuzzleRaw()
    this.props.clearSolution()
    this.props.clearPuzzle()
    this.props.clearSelectedNumber()
  }

  render() {
    return (
      <Section>
        <Container id='NewGameContainer'>
         <Link to='/'>
           <ButtonFullWidth 
            color={'dark'} 
            text={'Start New Game'} 
            handleOnClick={this.handleOnClick} 
          />
         </Link>        
        </Container>
      </Section>
    )
  }
}

export default connect(null, ({ clearDifficulty, clearPuzzle, clearPuzzleRaw, clearSelectedNumber, clearSolution }))(NewGameContainer);