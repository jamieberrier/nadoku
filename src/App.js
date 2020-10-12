import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import NavBarContainer from './containers/NavBarContainer.js';
import DifficultyContainer from './containers/DifficultyContainer.js';
import PuzzleContainer from './containers/PuzzleContainer';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { getCurrentUser } from './actions/currentUser.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { difficulty, currentUser } = this.props
    return (
      <div className="App">
        <NavBarContainer />
        {!currentUser && <Login />}
        {currentUser && !difficulty && <DifficultyContainer />}
        {currentUser && difficulty && <PuzzleContainer />}
        {currentUser && <Logout />}
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
