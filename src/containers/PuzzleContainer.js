import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import PuzzleGrid from '../components/PuzzleGrid';
import { generatePuzzle, clearPuzzle } from '../actions/puzzle.js';
import { clearDifficulty } from '../actions/difficulty.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import NumberContainer from './NumberContainer';
import NewGame from '../components/NewGame';

class PuzzleContainer extends Component {
  componentDidMount() {
    this.props.generatePuzzle(this.props.difficulty)
  }

  componentWillUnmount() {
    this.props.clearPuzzle()
    this.props.clearDifficulty()
    this.props.clearSelectedNumber()
  }
  
  render() {
    return (
      <Section>
        <Container id='PuzzleContainer'>
          <PuzzleGrid />
          <NumberContainer />
          <NewGame />
        </Container>
      </Section>
    )
  }
}

const mapStateToProps = ({ difficulty }) => {
  return {
    difficulty
  }
}

export default connect(mapStateToProps, { generatePuzzle, clearPuzzle, clearDifficulty, clearSelectedNumber })(PuzzleContainer);