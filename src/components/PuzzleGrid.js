import React from 'react';
import { connect } from 'react-redux'

import { setCellClass, updateCellValue } from '../actions/puzzle.js';

const PuzzleGrid = ({ puzzle, updateCellValue }) => {
  
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
          readOnly={cell.readOnly}
          data-rowindex={index}
          value={value} 
        />
      })}
    </div>
  )
      
  return (
    <div className="grid">
      {cells}
    </div>
  )
}

const mapStateToProps = ({ puzzle }) => {
  return {
    puzzle
  }
}

export default connect(mapStateToProps, { updateCellValue })(PuzzleGrid);