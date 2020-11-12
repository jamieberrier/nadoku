import React from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import NumberPad from '../components/NumberPad';
import { setSelectedNumber } from '../actions/selectedNumber.js';
import { highlightCells } from '../actions/puzzle.js';
import Remaining from '../components/Remaining';

const NumberContainer = ({ highlightCells, setSelectedNumber }) => {
  
  const handleOnClick = event => {
    const number = event.target.value
    
    setSelectedNumber(number)
    highlightCells(number)
  }

  return (
    <>
      <NumberPad handleOnClick={handleOnClick} />
      <Remaining />
    </>
  )
}

export default connect(null, ({ setSelectedNumber, highlightCells }))(NumberContainer);