import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Container } from 'react-bulma-components';

const NumberPad = ({ handleOnClick }) => {

  return (
    <Container id='NumberPadContainer'>
      {/* up to 786px */}
      <Button.Group position={'centered'} size={'medium'} id='NumberPad' className='is-hidden-tablet'>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='1'>1</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='2'>2</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='3'>3</Button>
      </Button.Group>
      <Button.Group position={'centered'} size={'medium'} id='NumberPad' className='is-hidden-tablet'>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='4'>4</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='5'>5</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='6'>6</Button>
      </Button.Group>
      <Button.Group position={'centered'} size={'medium'} className='is-hidden-tablet'>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='7'>7</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='8'>8</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='9'>9</Button>
      </Button.Group>
      {/* 769px and above */}
      <Button.Group position={'centered'} size={'medium'} id='NumberLine' className='is-hidden-mobile'>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='1'>1</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='2'>2</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='3'>3</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='4'>4</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='5'>5</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='6'>6</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='7'>7</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='8'>8</Button>
        <Button color={'success'} rounded={true} onClick={handleOnClick} value='9'>9</Button>
      </Button.Group>
    </Container>
  )
}

export default NumberPad;