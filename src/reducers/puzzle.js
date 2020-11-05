export default (state = [], action) => {
  switch (action.type) {
    case "SET_PUZZLE":
      return state.concat(action.rows)
    case "UPDATE_CELL_VALUE":
      // filter instead?
      const rowIndex = parseInt(action.rowindex)
      const cellRow = [...state[rowIndex]]
      const colNum = action.id.slice(-1)
      let cellColumn = []

      for (const row of [...state]) {
        for (const cell of row) {
          if (cell.coordinates.includes(colNum)) {
            cellColumn.push(cell)
          }
        }
      }

      const rowMatch = cellRow.some(cell => cell.value === action.value)
      const columnMatch = cellColumn.some(cell => cell.value === action.value)

      const newRow = cellRow.map(cell => {
        if (cell.coordinates === action.id) {
          if (cell.className.includes('conflict')) {
            const newClass = cell.className.split(' conflict').shift()
            return Object.assign({}, cell, {className: newClass, value: action.value})
          } else if (rowMatch || columnMatch) {
            if (action.value === "") {
              return Object.assign({}, cell, {value: action.value})
            }
            const conflict = cell.className + ' conflict'
            return Object.assign({}, cell, {className: conflict, value: action.value})
          } else {
            // { coordinates: cell.coordinates, value: action.value, readOnly: cell.readOnly }
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