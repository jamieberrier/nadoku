import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

import Player from '../components/Player.js';

class PlayerContainer extends Component {

  render() {
    const { sound } = this.props

    return(
      <Container>
        <Player sound={sound} />
      </Container>
    )
  }
}

const mapStateToProps = ({ sound }) => {
  return {
    sound
  }
}

export default connect(mapStateToProps, null)(PlayerContainer);