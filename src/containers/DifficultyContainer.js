import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Form, Heading, Section } from 'react-bulma-components';

import { setDifficulty } from '../actions/difficulty';

const { Radio } = Form;

class DifficultyContainer extends Component {
  state = {
    selected: null
  }

  handleOnChange = event => {
    this.setState({
      selected: event.target.value,
    })
    this.props.setDifficulty(event.target.value)
  }

  render() {
    return (
      <Section>
        <Container id='DifficultyContainer'>
          <Heading subtitle className='has-text-info'>Choose Puzzle Difficulty</Heading>
          <Radio name={'difficulty'} value={'easy'} checked={this.state.selected === 'easy'} onChange={this.handleOnChange}> Easy</Radio>
          <Radio name={'difficulty'} value={'medium'} checked={this.state.selected === 'medium'} onChange={this.handleOnChange}> Medium</Radio>
          <Radio name={'difficulty'} value={'hard'} checked={this.state.selected === 'hard'} onChange={this.handleOnChange}> Hard</Radio>
          <Radio name={'difficulty'} value={'very-hard'} checked={this.state.selected === 'very-hard'} onChange={this.handleOnChange}> Very Hard</Radio>
          <Radio name={'difficulty'} value={'insane'} checked={this.state.selected === 'insane'} onChange={this.handleOnChange}> Insane</Radio>
          <Radio name={'difficulty'} value={'inhuman'} checked={this.state.selected === 'inhuman'} onChange={this.handleOnChange}> Inhuman</Radio>
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

export default connect(mapStateToProps, { setDifficulty })(DifficultyContainer);