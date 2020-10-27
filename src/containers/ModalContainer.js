import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../actions/displayModal';
import DisplayModal from '../components/DisplayModal';

const ModalContainer  = ({ displayModal, hideModal }) => {

  const handleOnClose = () => {
    hideModal()
  }

  return (
    <DisplayModal show={displayModal.show} color={displayModal.color} content={displayModal.content} handleOnClose={handleOnClose} />
  )
}

const mapStateToProps = ({ displayModal }) => {
  return {
    displayModal
  }
}

export default connect(mapStateToProps, { hideModal })(ModalContainer)