import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

const PuzzleGrid = ({ puzzle, handleOnChange, handleOnClick }) => {

  const setCellClass = coordinates => {
    if (coordinates === 'C3' || coordinates === 'F3' || coordinates === 'C6' || coordinates === 'F6') {
      return "cell rightborder bottomborder"
    } else if (coordinates.includes('C') || coordinates.includes('F')) {
      return "cell bottomborder"
    } else if (coordinates.includes('3') || coordinates.includes('6')) {
      return "cell rightborder"
    } else {
      return "cell"
    }
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

export default PuzzleGrid;