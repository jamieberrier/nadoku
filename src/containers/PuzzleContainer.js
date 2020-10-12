import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import PuzzleGrid from '../components/PuzzleGrid';
import { generatePuzzle, clearPuzzle } from '../actions/puzzle.js';
import { clearDifficulty } from '../actions/difficulty.js';
import NumberContainer from './NumberContainer';

class PuzzleContainer extends Component {
  componentDidMount() {
    this.props.generatePuzzle(this.props.difficulty)
  }

  componentWillUnmount() {
    this.props.clearPuzzle()
    this.props.clearDifficulty()
  }
  
  render() {
    return (
      <Section>
        <Container id='PuzzleContainer'>
          <PuzzleGrid />
          <NumberContainer />
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

export default connect(mapStateToProps, { generatePuzzle, clearPuzzle, clearDifficulty })(PuzzleContainer);