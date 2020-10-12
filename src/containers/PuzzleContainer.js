import React, { Component } from 'react';
import { connect } from 'react-redux';

import SudokuToolCollection from 'sudokutoolcollection';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import PuzzleGrid from '../components/PuzzleGrid';
import { setPuzzle, clearPuzzle, updateCellValue } from '../actions/puzzle.js';
import { clearDifficulty } from '../actions/difficulty.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { setSolution } from '../actions/solution.js';
import NumberContainer from './NumberContainer';
import NewGameContainer from './NewGameContainer';

const sudoku = SudokuToolCollection()

class PuzzleContainer extends Component {
  componentDidMount() {
    this.generatePuzzle(this.props.difficulty)
  }

  componentWillUnmount() {
    this.props.clearPuzzle()
    this.props.clearDifficulty()
    this.props.clearSelectedNumber()
  }

  generatePuzzle = level => {
    const puzzleString = sudoku.generator.generate(level)
    const puzzleObject = sudoku.conversions.stringToObject(puzzleString)
    const rows = []
    const cells = Object.entries(puzzleObject).map(i => {
      return {
        coordinates: i[0],
        value: i[1],
        readOnly: i[1] !== "."
      }
    })
    
    for (let i = 0; i < cells.length; i += 9) {
      let row = cells.slice(i, i+9)
      rows.push(row)
    }
  
    this.props.setPuzzle(rows)
    this.generateSolution(puzzleString)
  }

  generateSolution = puzzleString => {
    const solutionString = sudoku.solver.solve(puzzleString)
    this.props.setSolution(solutionString)
  }

  handleOnClick = event => {
    const { id } = event.target
    const { rowindex } = event.target.dataset
    this.props.updateCellValue(rowindex, id, this.props.selectedNumber)
  }

  handleOnChange = event => {
    const { id, value } = event.target
    const { rowindex } = event.target.dataset
    this.props.updateCellValue(rowindex, id, value)
  }

  render() {
    return (
      <Section>
        <Container id='PuzzleContainer'>
          <PuzzleGrid puzzle={this.props.puzzle} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} />
          <NumberContainer />
          <NewGameContainer />
        </Container>
      </Section>
    )
  }
}

const mapStateToProps = ({ difficulty, puzzle, selectedNumber }) => {
  return {
    difficulty,
    puzzle,
    selectedNumber
  }
}

export default connect(mapStateToProps, { clearPuzzle, clearDifficulty, clearSelectedNumber, setPuzzle, setSolution, updateCellValue })(PuzzleContainer);