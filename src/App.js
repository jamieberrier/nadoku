import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar.js';
import Signup from './components/Signup.js';
import Welcome from './components/Welcome.js';
import DifficultyContainer from './containers/DifficultyContainer.js';
//import PuzzleContainer from './containers/PuzzleContainer';
import LoginContainer from './containers/LoginContainer.js';
import LogoutContainer from './containers/LogoutContainer.js';
import { getCurrentUser } from './actions/currentUser.js';
import PuzzleContainer from './containers/PuzzleContainer';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => loggedIn ? <DifficultyContainer /> : <Welcome />}/>
        <Route exact path='/login' component={LoginContainer}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/puzzle' component={PuzzleContainer}/>
        {loggedIn && <LogoutContainer />}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    loggedIn: !!currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
