import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import NavBar from './containers/NavBar.js';
import PuzzleContainer from './containers/PuzzleContainer';
import { getCurrentUser } from './actions/currentUser.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { difficulty } = this.props
    return (
      <div className="App">
        <NavBar />
        {difficulty && <PuzzleContainer />}
      </div>
    );
  }
}

const mapStateToProps = ({ difficulty }) => {
  return {
    difficulty
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
