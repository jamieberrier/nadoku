import React from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';


import { setCellClass, updateCellValue } from '../actions/puzzle.js';

const PuzzleGrid = ({ puzzle, selectedNumber, updateCellValue }) => {
  
  const handleOnClick = event => {
    const { id } = event.target
    const { rowindex } = event.target.dataset
    updateCellValue(rowindex, id, selectedNumber)
  }

  const handleOnChange = event => {
    const { id, value } = event.target
    const { rowindex } = event.target.dataset
    updateCellValue(rowindex, id, value)
  }
  
  const cells = puzzle.map((row, index) => 
    <div className="row" key={index}>
      {row.map(cell => {
        const value = cell.value !== "." ? cell.value : ""
        return <input
          className={setCellClass(cell.coordinates)}
          id={cell.coordinates}
          key={cell.coordinates}
          onChange={handleOnChange}
          onClick={handleOnClick}
          readOnly={cell.readOnly}
          data-rowindex={index}
          value={value} 
        />
      })}
    </div>
  )
      
  return (
    <Container id='grid'>
        {cells}
    </Container>
  )
}

const mapStateToProps = ({ puzzle, selectedNumber }) => {
  return {
    puzzle,
    selectedNumber
  }
}

export default connect(mapStateToProps, { updateCellValue })(PuzzleGrid);