import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

const PuzzleGrid = ({ puzzle, handleOnChange, handleOnClick }) => {

  const cells = puzzle.map((row, index) => 
    <div className="row" key={index}>
      {row.map(cell => {
        return <input
          className={cell.className}
          id={cell.coordinates}
          key={cell.coordinates}
          onChange={handleOnChange}
          onClick={handleOnClick}
          readOnly={cell.readOnly}
          data-rowindex={index}
          defaultValue={cell.value}
          disabled={cell.disabled}
          type='tel'
        />
      })}
    </div>
  )
      
  return (
    <Container id='PuzzleGrid'>
      {cells}
    </Container>
  )
}

export default PuzzleGrid;