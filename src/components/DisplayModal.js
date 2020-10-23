import React from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Modal, Heading } from 'react-bulma-components';

const DisplayModal = ({ color, content, show = false, handleOnClose }) => {

  const className = `notification is-${color} has-text-centered has-text-white`

  let message 
  
  if (Array.isArray(content)) {
    // create <p> for each error
    message = content.map((message, index) => <p key={index}>{message}</p>)
  } else if (color === 'success') {
    message = <Heading>Puzzle Solved!</Heading>
  }
  else {
    message = <p>{content}</p>
  }

  return(
    <Modal show={show} onClose={handleOnClose}>
      <Modal.Content className={className}>
        {message}
      </Modal.Content>
    </Modal>
  )
}

export default DisplayModal;