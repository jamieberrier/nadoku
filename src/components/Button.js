import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';

export default ({ text, handleOnClick }) => {
  return(
    <Button 
      type='button'
      onClick={handleOnClick}
    >
      {text}
    </Button>
  )
}
