import React, { Component } from 'react';
import { connect } from 'react-redux';

import PuzzleGrid from '../components/PuzzleGrid';
import { generatePuzzle } from '../actions/puzzle.js';

class PuzzleContainer extends Component {
  componentDidMount() {
    this.props.generatePuzzle('easy')
  }
  
  render() {
    return (
      <div className="PuzzleContainer">
        <PuzzleGrid />
      </div>
    )
  }
}

export default connect(null, { generatePuzzle })(PuzzleContainer);