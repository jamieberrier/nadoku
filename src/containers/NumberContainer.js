import React from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';

import NumberPad from '../components/NumberPad';
import { setSelectedNumber } from '../actions/selectedNumber.js';
import { highlightCells, setCellClass } from '../actions/puzzle.js';

const NumberContainer = ({ highlightCells, setSelectedNumber }) => {

  const handleOnClick = event => {
    const number = event.target.value
    setSelectedNumber(number)

    const rows = document.querySelector('#PuzzleGridContainer').children
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.children.length; j++) {
        const cell = row.children[j];
        if (cell.className.includes('selected')) {
          cell.className = setCellClass(cell.id)
        }
      }
    }
    
    highlightCells(number)
  }

  return (
    <NumberPad handleOnClick={handleOnClick} />
  )
}

export default connect(null, ({ setSelectedNumber, highlightCells }))(NumberContainer);