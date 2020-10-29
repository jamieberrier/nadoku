import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Form, Heading } from 'react-bulma-components';

import { setSound } from '../actions/sound.js';

const { Radio } = Form;
const OCEAN = 'https://open.spotify.com/embed/album/6qBSrgBXgi617LaUkTwsLU'
const RAIN = 'https://open.spotify.com/embed/album/0A3ZjOnHI0wMbXmIEeBAhk'
const WATER = 'https://open.spotify.com/embed/album/3hwb2pVFYoJQXJPypPtPD1'
const RAINFOREST = 'https://open.spotify.com/embed/playlist/37i9dQZF1DXaw68inx4UiN'
const FOREST = 'https://open.spotify.com/embed/playlist/1R4595WsywaOJOGoJEvFer'

class SoundContainer extends Component {
  state = {
    selected: null
  }
  
  handleOnChange = event => {
    let selectedSound

    this.setState({
      selected: event.target.value,
    })

    switch (event.target.value) {
      case 'ocean':
        selectedSound = OCEAN
        break;
      case 'rain':
        selectedSound = RAIN
        break;
      case 'water':
        selectedSound = WATER
        break;
      case 'rainForest':
        selectedSound = RAINFOREST
        break;
      case 'forest':
        selectedSound = FOREST
        break;
      default:
        break;
    }
    
    this.props.setSound(selectedSound) 
  }

  render() {
    return(
      <Container id='SoundContainer'>
        <Heading className='has-text-info'>Choose Nature Sound</Heading>
        <Radio name={'sound'} value={'ocean'} checked={this.state.selected === 'ocean'} onChange={this.handleOnChange}> Ocean</Radio>
        <Radio name={'sound'} value={'rainForest'} checked={this.state.selected === 'rainForest'} onChange={this.handleOnChange}> Rain Forest</Radio>
        <Radio name={'sound'} value={'water'} checked={this.state.selected === 'water'} onChange={this.handleOnChange}> Water</Radio>
        <Radio name={'sound'} value={'forest'} checked={this.state.selected === 'forest'} onChange={this.handleOnChange}> Forest</Radio>
        <Radio name={'sound'} value={'rain'} checked={this.state.selected === 'rain'} onChange={this.handleOnChange}> Rain</Radio>
      </Container>
    )
  }
}

export default connect(null, { setSound })(SoundContainer);