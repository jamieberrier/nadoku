import React from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Container } from 'react-bulma-components';

import { setSelectedNumber } from '../actions/selectedNumber.js';

const NumberPad = ({ setSelectedNumber }) => {

  const handleOnClick = (event) => {
    setSelectedNumber(event.target.value)
  }

  return (
    <Container>
      <Button.Group position={'centered'}>
        <Button color='success' onClick={handleOnClick} value='1'>1</Button>
        <Button color='success' onClick={handleOnClick} value='2'>2</Button>
        <Button color='success' onClick={handleOnClick} value='3'>3</Button>
      </Button.Group>
      <Button.Group position={'centered'}>
        <Button color='success' onClick={handleOnClick} value='4'>4</Button>
        <Button color='success' onClick={handleOnClick} value='5'>5</Button>
        <Button color='success' onClick={handleOnClick} value='6'>6</Button>
      </Button.Group>
      <Button.Group position={'centered'}>
        <Button color='success' onClick={handleOnClick} value='7'>7</Button>
        <Button color='success' onClick={handleOnClick} value='8'>8</Button>
        <Button color='success' onClick={handleOnClick} value='9'>9</Button>
      </Button.Group>
    </Container>
  )
}

export default connect(null, ({ setSelectedNumber }))(NumberPad);