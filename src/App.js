import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { getCurrentUser } from './actions/currentUser.js'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nadoku</h1>
        </header>
        {this.props.currentUser 
          ? <Logout />
          : <Login />
        }
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
