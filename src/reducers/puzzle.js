import { column, conflict, highlight, nonConflict, square, unSelect } from '../utilities/puzzle.js';

export default (state = [], action) => {
  switch (action.type) {
    case "SET_PUZZLE":
      return state.concat(action.rows)
    case "UPDATE_CELL_VALUE":
      const rowIndex = parseInt(action.rowIndex)
      const cellRow = [...state[rowIndex]]
      // column number
      const colNum = action.id.slice(-1)
      // column index
      const colIndex = colNum - 1
      // uppermost row index of the square
      let rowStart = rowIndex - (rowIndex % 3)
      // leftmost column index of the square
      let colStart = colIndex - (colIndex % 3)
      // cells in the same column
      let cellColumn = column([...state], colNum)
      // cells in the same square
      let cellSquare = square([...state], rowStart, colStart).flat()
      // check for match(es) in row, column, and square
      const rowMatch = cellRow.some(cell => cell.value === action.value)
      const colMatch = cellColumn.some(cell => cell.value === action.value)
      const squareMatch = cellSquare.some(cell => cell.value === action.value)
      // create new row
      const newRow = cellRow.map(cell => {
        // if coordinates match
        if (cell.coordinates === action.id) {
          // check if previous conflict
          if (cell.className.includes('conflict')) {
            cell.className = nonConflict(cell)
          }
          // check if value is empty string
          if(action.value === "") {
            return Object.assign({}, cell, {className: unSelect(cell), value: action.value})
          }
          // check if conflict
          if (rowMatch || colMatch || squareMatch) {
            // add 'conflict' to className
            return Object.assign({}, cell, {className: conflict(cell), value: action.value})
          } else { // no conflicts
            // add 'selected' to className
            return Object.assign({}, cell, {className: highlight(cell), value: action.value})
          }
        }
        // return all the ones not changing
        return cell
      })
      return [...state.slice(0, rowIndex), newRow, ...state.slice(rowIndex + 1)]
    case "HIGHLIGHT_CELLS":
      return state.map(row => {
        return row.map(cell => {
          const newCell = Object.assign({}, cell, {className: unSelect(cell)})
          if (newCell.value === action.value) {
            return Object.assign({}, newCell, {className: highlight(cell)})
          }
          return newCell
        })
      })
    case "CLEAR_PUZZLE":
      return []
    default:
      return state;
  }
}