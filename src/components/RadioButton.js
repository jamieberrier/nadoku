import React from 'react';

const RadioButton = ({ name, text }) => {

  return (
    <label>
      <input 
        className='RadioButton'
        name={name}
        type='radio'
        value={text}
      />
      {text}
    </label>
  )
}

export default RadioButton;