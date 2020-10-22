import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

const ButtonFullWidth = ({ color, text, outlined = false, handleOnClick }) => {
  return (
    <Button 
      color={color}
      fullwidth={true} 
      outlined={outlined}
      onClick={handleOnClick}
    >
      {text}
    </Button>
  )
}

export default ButtonFullWidth;