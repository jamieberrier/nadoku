import React, { Component }  from 'react';
import { connect } from 'react-redux';
import LevelContainer from './LevelContainer.js';

import Login from '../components/Login.js';
import Logout from '../components/Logout.js';

class NavBar extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <header className="App-header">
        {currentUser && <Logout />}
        <h1>Nadoku</h1>
        {!currentUser && <Login />}
        {currentUser && <LevelContainer />}
      </header>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, null)(NavBar);