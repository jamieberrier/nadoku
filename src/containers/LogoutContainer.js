import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

import { clearDifficulty } from '../actions/difficulty.js';
import { clearPuzzle } from '../actions/puzzle.js';
import { clearPuzzleRaw } from '../actions/puzzleRaw.js';
import { clearSelectedNumber } from '../actions/selectedNumber.js';
import { clearSolution } from '../actions/solution.js';
import { logout } from '../actions/currentUser.js'
import ButtonFullWidth from '../components/ButtonFullWidth.js';

class Logout extends Component {

  handleOnClick = () => {
    this.props.clearDifficulty()
    this.props.clearPuzzleRaw()
    this.props.clearSolution()
    this.props.clearPuzzle()
    this.props.clearSelectedNumber()
    this.props.logout()
  }

  render() {
    return (
      <Section id='LogoutSection'>
        <Container id='LogoutContainer'>
          <Link to='/'>
            <ButtonFullWidth text={'Log Out'} color={'dark'} handleOnClick={this.handleOnClick} />
          </Link>
        </Container>
      </Section>
    )
  }
}

export default connect(null, { clearDifficulty,  clearPuzzle, clearPuzzleRaw, clearSelectedNumber, clearSolution, logout })(Logout);