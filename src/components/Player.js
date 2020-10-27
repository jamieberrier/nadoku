import React from 'react';

export const Player = ({ sound }) => {
  return(
    <iframe 
      src={sound}
      title='nature sounds'
      width='300' 
      height='80'
      frameBorder='0' 
      allowtransparency='true' 
      allow='encrypted-media'>
    </iframe>
  )
}

export default Player;
