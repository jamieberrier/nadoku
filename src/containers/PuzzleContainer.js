import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import { checkIfSolved } from '../actions/isSolved.js';
import { updateCellValue } from '../actions/puzzle.js';
import PuzzleGrid from '../components/PuzzleGrid.js';
import OptionsContainer from './OptionsContainer.js';
import NumberContainer from './NumberContainer.js';
import PlayerContainer from './PlayerContainer.js';

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
      this.props.updateCellValue(rowindex, id, this.props.selectedNumber)
    }
  }

  handleOnChange = event => {
    const { id } = event.target
    let { value } = event.target
    const { rowindex } = event.target.dataset
    // if typing, validate input
    if (isNaN(value) || value < 1 || value > 9) {
      //alert('Enter 0-9')
      document.querySelector(`#${id}`).value = ""
    } else {
      this.props.updateCellValue(rowindex, id, value)
    }
  }
  
  render() {
    return (
      <Section id='PuzzleSection'>
        {/* if puzzle is generated */}
        {this.props.puzzle.length === 9 &&
          <Container id='PuzzleContainer'>
            <PlayerContainer />
            <PuzzleGrid puzzle={this.props.puzzle} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} />
            <NumberContainer />
          </Container>
        }
        {/* if no puzzle is generated */}
        {this.props.puzzle.length === 0 &&
          <OptionsContainer />
        }
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