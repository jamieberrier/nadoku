import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import NavBar from './components/NavBar.js';
import PuzzleContainer from './containers/PuzzleContainer';
import { getCurrentUser } from './actions/currentUser.js'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <PuzzleContainer />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
