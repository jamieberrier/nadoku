import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import NavBar from './components/NavBar.js';
import DifficultyContainer from './containers/DifficultyContainer.js';
import PuzzleContainer from './containers/PuzzleContainer';
import LoginContainer from './containers/LoginContainer.js';
import LogoutContainer from './containers/LogoutContainer.js';
import { getCurrentUser } from './actions/currentUser.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { difficulty, currentUser } = this.props
    return (
      <div className="App">
        <NavBar />
        {!currentUser && <LoginContainer />}
        {currentUser && !difficulty && <DifficultyContainer />}
        {currentUser && difficulty && <PuzzleContainer />}
        {currentUser && <LogoutContainer />}
      </div>
    );
  }
}

const mapStateToProps = ({ difficulty, currentUser }) => {
  return {
    difficulty, 
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
