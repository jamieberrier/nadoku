import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setDifficulty } from '../actions/difficulty';
import Button from '../components/Button';
import RadioButton from '../components/RadioButton';

class LevelContainer extends Component {

  handleOnClick = () => {
    const difficultyLevel = document.querySelector('.LevelContainer input[type="radio"]:checked').value
    this.props.setDifficulty(difficultyLevel)
  }

  render() {
    return (
      <form className='LevelContainer'>
        <RadioButton text={'easy'} name={'difficulty'} />
        <RadioButton text={'medium'} name={'difficulty'} />
        <RadioButton text={'hard'} name={'difficulty'} />
        <Button text={'Start Puzzle'} handleOnClick={this.handleOnClick} />
      </form>
    )
  }
}

const mapStateToProps = ({ difficulty }) => {
  return {
    difficulty
  }
}

export default connect(mapStateToProps, { setDifficulty })(LevelContainer);