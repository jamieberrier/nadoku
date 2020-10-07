import React from 'react';
import { connect } from 'react-redux';

import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  return (
    <header className="App-header">
      <h1>Nadoku</h1>
      {currentUser ? <Logout /> : <Login />}
      {/* if current user display <LevelRadioBtns />*/}
    </header>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, null)(NavBar);