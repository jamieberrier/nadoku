import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import { checkIfSolved } from '../actions/isSolved.js';
import { updateCellValue } from '../actions/puzzle.js';
import PuzzleGrid from '../components/PuzzleGrid.js';
import NumberContainer from './NumberContainer.js';

class PuzzleContainer extends Component {
  
  componentDidUpdate(prevProps) {
    if (prevProps.puzzle !== this.props.puzzle) {
      this.props.checkIfSolved(this.props.puzzle, this.props.solution)
    }
  }
  
  handleOnClick = event => {
    const { id } = event.target
    const { rowindex } = event.target.dataset
    // if number selected from key pad
    if (this.props.selectedNumber) {
      this.props.updateCellValue(id, rowindex, this.props.selectedNumber)
    } 
  }

  // prevents typing in cells
  handleOnKeyDown = event => {
    const { id } = event.target
    const { rowindex } = event.target.dataset

    this.props.updateCellValue(id, rowindex, "")
  }
  
  render() {
    const { puzzle } = this.props
    return (
      <Section id='PuzzleSection'>
        <Container id='PuzzleContainer'>
          <PuzzleGrid 
            puzzle={puzzle} 
            handleOnClick={this.handleOnClick}
            handleOnKeyDown={this.handleOnKeyDown}
          />
          <NumberContainer />
        </Container>
      </Section>
    )
  }
}

const mapStateToProps = ({ difficulty, puzzle, selectedNumber, solution }) => {
  return {
    difficulty,
    puzzle,
    selectedNumber,
    solution
  }
}

export default connect(mapStateToProps, { updateCellValue, checkIfSolved })(PuzzleContainer);