import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Modal, Heading } from 'react-bulma-components';

import DifficultyContainer from './DifficultyContainer';
import NewGameContainer from './NewGameContainer';
import NumberContainer from './NumberContainer';
import PuzzleGrid from '../components/PuzzleGrid';
import { checkIfSolved } from '../actions/isSolved.js';
import { updateCellValue } from '../actions/puzzle.js';

class PuzzleContainer extends Component {
  state = {
    showModal: true
  }

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

  handleOnClose = () => {
    this.setState({
      showModal: false
    })
  }
  
  render() {
    return (
      <Section id='PuzzleSection'>
        {/* if puzzle is solved */}
        {this.props.isSolved && 
          <Modal show={this.state.showModal} onClose={this.handleOnClose}>
            <Modal.Content className="notification is-success has-text-centered has-text-white">
              <Heading>Puzzle Solved!</Heading>
            </Modal.Content>
          </Modal>
        }
        {/* if puzzle is generated */}
        {this.props.puzzle.length === 9 &&
          <Container id='PuzzleContainer'>
            <PuzzleGrid puzzle={this.props.puzzle} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} />
            <NumberContainer />
            <NewGameContainer />
          </Container>
        }
        {/* if no puzzle is generated */}
        {this.props.puzzle.length === 0 &&
          <DifficultyContainer />
        }
      </Section>
    )
  }
}

const mapStateToProps = ({ isSolved, puzzle, selectedNumber, solution }) => {
  return {
    isSolved,
    puzzle,
    selectedNumber,
    solution
  }
}

export default connect(mapStateToProps, { updateCellValue, checkIfSolved })(PuzzleContainer);