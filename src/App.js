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
    const { currentUser } = this.props
    return (
      <div className="App">
        <NavBar />
        {currentUser && <PuzzleContainer />}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
