import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section } from 'react-bulma-components';

import NumberPad from '../components/NumberPad';
import { setSelectedNumber } from '../actions/selectedNumber.js';

class NumberContainer extends Component {

  handleOnClick = (event) => {
    this.props.setSelectedNumber(event.target.value)
  }

  render() {
    return (
      <Section>
        <NumberPad handleOnClick={this.handleOnClick} />
      </Section>
    )
  }
}

export default connect(null, ({ setSelectedNumber }))(NumberContainer);