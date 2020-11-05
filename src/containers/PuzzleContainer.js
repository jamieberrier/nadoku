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
    // using key pad
    if (this.props.selectedNumber) {
      this.props.updateCellValue({rowIndex: rowindex, id: id, value: this.props.selectedNumber})
    } 
  }

  // typing or deleting (key pad)
  handleOnChange = event => {
    const { id } = event.target
    let { value } = event.target
    const { rowindex } = event.target.dataset
    // if typing, validate input
    if (isNaN(value) || value < 1 || value > 9) {
      this.props.updateCellValue({rowIndex: rowindex, id: id, value: ""})
    } else { // using key pad
      this.props.updateCellValue({rowIndex: rowindex, id: id, value: value})
    }
  }
  
  render() {
    return (
      <Section id='PuzzleSection'>
        <Container id='PuzzleContainer'>
          <PuzzleGrid puzzle={this.props.puzzle} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} />
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