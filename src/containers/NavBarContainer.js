import React, { Component }  from 'react';
import { connect } from 'react-redux';

import Logout from '../components/Logout.js';

class NavBarContainer extends Component {
  render() {
    const { currentUser } = this.props
    return (
      <header className='App-header'>
        <h1>Nadoku</h1>
        {currentUser && <Logout />}
    </header>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, null)(NavBarContainer);