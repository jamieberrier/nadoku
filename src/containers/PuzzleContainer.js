import React, { Component } from 'react';
import { connect } from 'react-redux';

import PuzzleGrid from '../components/PuzzleGrid';
import { generatePuzzle, clearPuzzle } from '../actions/puzzle.js';
import { clearDifficulty } from '../actions/difficulty.js';

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
      <div className="PuzzleContainer">
        <PuzzleGrid />
      </div>
    )
  }
}

const mapStateToProps = ({ difficulty }) => {
  return {
    difficulty
  }
}

export default connect(mapStateToProps, { generatePuzzle, clearPuzzle, clearDifficulty })(PuzzleContainer);