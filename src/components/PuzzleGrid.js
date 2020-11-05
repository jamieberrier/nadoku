import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Section } from 'react-bulma-components';

const PuzzleGrid = ({ puzzle, handleOnChange, handleOnClick }) => {

  const cells = puzzle.map((row, index) => 
    <div className="row" key={index}>
      {row.map(cell => {
        return <input
          className={cell.className}
          data-rowindex={index}
          disabled={cell.disabled}
          id={cell.coordinates}
          key={cell.coordinates}
          onChange={handleOnChange}
          onClick={handleOnClick}
          type='tel'
          value={cell.value}
        />
      })}
    </div>
  )
      
  return (
    <Section id='PuzzleGridSection'>
      <Container id='PuzzleGridContainer' className='PuzzleGrid'>
        {cells}
      </Container>
    </Section>
  )
}

export default PuzzleGrid;