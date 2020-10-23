import React, { Component } from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../actions/displayModal';
import DisplayModal from '../components/DisplayModal';

class ModalContainer extends Component {

  handleOnClose = () => {
    this.props.hideModal()
  }

  render() {
    const { displayModal } = this.props

    return (
      <DisplayModal show={displayModal.show} color={displayModal.color} content={displayModal.content} handleOnClose={this.handleOnClose} />
    )
  }
}

const mapStateToProps = ({ displayModal }) => {
  return {
    displayModal
  }
}

export default connect(mapStateToProps, { hideModal })(ModalContainer)