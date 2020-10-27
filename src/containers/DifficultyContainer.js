import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Form, Heading } from 'react-bulma-components';

import { setDifficulty } from '../actions/difficulty';
import { generateRawPuzzle } from '../actions/puzzleRaw.js';
import { generatePuzzle } from '../actions/puzzle.js';
import { generateSolution } from '../actions/solution.js';
import ButtonFullWidth from '../components/ButtonFullWidth';
import SoundContainer from './SoundContainer.js';

const { Radio } = Form;

class DifficultyContainer extends Component {
  state = {
    selected: null
  }

  handleOnChange = event => {
    this.setState({
      selected: event.target.value,
    })
  }

  handleOnClick = () => {
    const difficultyLevel = this.state.selected
    this.props.setDifficulty(difficultyLevel)
    const raw = this.props.generateRawPuzzle(difficultyLevel)
    this.props.generateSolution(raw)
    this.props.generatePuzzle(raw)
  }

  render() {
    return (
      <>
        <SoundContainer />
        <Container id='DifficultyContainer'>
          <Heading subtitle className='has-text-info'>Choose Puzzle Difficulty</Heading>
          <Radio name={'difficulty'} value={'easy'} checked={this.state.selected === 'easy'} onChange={this.handleOnChange}> Easy</Radio>
          <Radio name={'difficulty'} value={'medium'} checked={this.state.selected === 'medium'} onChange={this.handleOnChange}> Medium</Radio>
          <Radio name={'difficulty'} value={'hard'} checked={this.state.selected === 'hard'} onChange={this.handleOnChange}> Hard</Radio>
          <Radio name={'difficulty'} value={'very-hard'} checked={this.state.selected === 'very-hard'} onChange={this.handleOnChange}> Very Hard</Radio>
          <Radio name={'difficulty'} value={'insane'} checked={this.state.selected === 'insane'} onChange={this.handleOnChange}> Insane</Radio>
          <Radio name={'difficulty'} value={'inhuman'} checked={this.state.selected === 'inhuman'} onChange={this.handleOnChange}> Inhuman</Radio>
        </Container>
        <Section>
          <Link to='/puzzle'>
            <ButtonFullWidth 
              color={'success'} 
              text={'Start Puzzle'} 
              handleOnClick={this.handleOnClick} 
            />
          </Link>
        </Section>
      </>
    )
  }
}

const mapStateToProps = ({ difficulty, puzzleRaw }) => {
  return {
    difficulty,
    puzzleRaw
  }
}

export default connect(mapStateToProps, { setDifficulty, generateRawPuzzle, generatePuzzle, generateSolution })(DifficultyContainer);