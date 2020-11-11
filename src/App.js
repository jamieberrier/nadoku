import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import './App.css';
import { getCurrentUser, clearCurrentUser } from './actions/currentUser.js';
import Login from './components/Login.js';
import NavBar from './components/NavBar.js';
import Signup from './components/Signup.js';
import Welcome from './components/Welcome.js';
import PuzzleContainer from './containers/PuzzleContainer';
import ModalContainer from './containers/ModalContainer';
import OptionsContainer from './containers/OptionsContainer';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  componentWillUnmount() {
    this.props.clearCurrentUser()
  }

  render() {
    const { loggedIn, displayModal } = this.props
    
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            {loggedIn ? <Redirect to='/options' /> : <Welcome />}
          </Route>
          <Route exact path='/login'>
            {loggedIn ? <Redirect to='/options' /> : <Login />}
          </Route>
          <Route exact path='/signup'>
            {loggedIn ? <Redirect to='/options' /> : <Signup />}
          </Route>
          <Route exact path='/options'>
            {loggedIn ? <OptionsContainer /> : <Redirect to='/' />}
          </Route>
          <Route exact path='/puzzle'>
            {loggedIn ? <PuzzleContainer /> : <Redirect to='/' />}
          </Route>
        </Switch>
        {displayModal.show && <ModalContainer />}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser, displayModal }) => {
  return {
    loggedIn: !!currentUser,
    displayModal
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser,  clearCurrentUser })(App));
