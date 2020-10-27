import React from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

import Player from '../components/Player.js';

const PlayerContainer = ({ sound }) => {

  return(
    <Container>
      <Player sound={sound} />
    </Container>
  )
}

const mapStateToProps = ({ sound }) => {
  return {
    sound
  }
}

export default connect(mapStateToProps, null)(PlayerContainer);