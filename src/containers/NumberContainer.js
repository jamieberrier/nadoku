import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section } from 'react-bulma-components';

import NumberPad from '../components/NumberPad';
import { setSelectedNumber } from '../actions/selectedNumber.js';
import { highlightCells, setCellClass } from '../actions/puzzle.js';

class NumberContainer extends Component {

  handleOnClick = event => {
    const number = event.target.value
    this.props.setSelectedNumber(number)

    const rows = document.querySelector('#PuzzleGrid').children
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      for (let j = 0; j < row.children.length; j++) {
        const cell = row.children[j];
        if (cell.className.includes('selected')) {
          cell.className = setCellClass(cell.id)
        }
      }
    }
    
    this.props.highlightCells(number)
  }

  render() {
    return (
      <Section id='NumberSection'>
        <NumberPad handleOnClick={this.handleOnClick} />
      </Section>
    )
  }
}

export default connect(null, ({ setSelectedNumber, highlightCells }))(NumberContainer);