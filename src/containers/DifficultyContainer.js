import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container, Form, Button } from 'react-bulma-components';

import { setDifficulty } from '../actions/difficulty';


const { Radio } = Form;

class DifficultyContainer extends Component {
  state = {
    selected: undefined
  }

  handleOnChange = (event) => {
    this.setState({
      selected: event.target.value,
    })
  }

  handleOnClick = () => {
    const difficultyLevel = this.state.selected
    this.props.setDifficulty(difficultyLevel)
  }

  render() {
    return (
      <Section>
        <Container>
          <Radio name={'difficulty'} value={'easy'} checked={this.state.selected === 'easy'} onChange={this.handleOnChange}> Easy</Radio>
          <Radio name={'difficulty'} value={'medium'} checked={this.state.selected === 'medium'} onChange={this.handleOnChange}> Medium</Radio>
          <Radio name={'difficulty'} value={'hard'} checked={this.state.selected === 'hard'} onChange={this.handleOnChange}> Hard</Radio>
          <Button color={'dark'} onClick={this.handleOnClick} size={'small'} fullwidth={true}>Start Puzzle</Button>
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