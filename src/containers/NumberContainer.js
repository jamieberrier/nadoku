import React, { Component } from 'react';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section } from 'react-bulma-components';

import NumberPad from '../components/NumberPad';

class NumberContainer extends Component {

  render() {
    return (
      <Section>
        <NumberPad />
      </Section>
    )
  }
}

export default NumberContainer;