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
      let cellColumn = []
      // uppermost row index of the square
      let rowStart = rowIndex - (rowIndex % 3)
      // leftmost column index of the square
	    let colStart = colIndex - (colIndex % 3)
      let cellSquare = []
      // add cells in the square to cellSquare
      for (let i = 0; i < 3; i++) {
        cellSquare[i] = cellSquare[i] || []
        for (let j = 0; j < 3; j++) {
          cellSquare[i].push(state[rowStart + i][colStart + j])
        }
      }
      // add cells in the column to cellColumn
      for (const row of [...state]) {
        for (const cell of row) {
          if (cell.coordinates.includes(colNum)) {
            cellColumn.push(cell)
          }
        }
      }
      // check for match(es) in row, column, and square
      const rowMatch = cellRow.some(cell => cell.value === action.value)
      const colMatch = cellColumn.some(cell => cell.value === action.value)
      const squareMatch = cellSquare.flat().some(cell => cell.value === action.value)
      // create new row
      const newRow = cellRow.map(cell => {
        if (cell.coordinates === action.id) {
          // if cell was previously a conflict
          if (cell.className.includes('conflict')) {
            const newClass = cell.className.split(' conflict').shift()
            return Object.assign({}, cell, {className: newClass, value: action.value})
          } else if (rowMatch || colMatch || squareMatch) { // cell has a conflict
            const conflict = cell.className + ' conflict'
            return Object.assign({}, cell, {className: conflict, value: action.value})
          } else { // no conflicts
            return Object.assign({}, cell, {value: action.value})
          }
        }
        // return all the ones not changing
        return cell
      })
      return [...state.slice(0, rowIndex), newRow, ...state.slice(rowIndex + 1)]
    case "HIGHLIGHT_CELLS":
      return state.map(row => {
        return row.map(cell => {
          if (cell.value === action.value) {
            const highlighted = cell.className + ' selected'
            return Object.assign({}, cell, {className: highlighted})
          }
          return cell
        })
      })
    case "CLEAR_PUZZLE":
      return []
    default:
      return state;
  }
}