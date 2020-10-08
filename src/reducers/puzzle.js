export default (state = [], action) => {
  switch (action.type) {
    case "SET_PUZZLE":
      return state.concat(action.puzzle)
    case "UPDATE_CELL_VALUE":
      // filter instead?
      const rowIndex = parseInt(action.rowindex)
      const row = [...state[rowIndex]]
      const newRow = row.map(cell => {
        if (cell.coordinates === action.id) {
          // { coordinates: cell.coordinates, value: action.value, readOnly: cell.readOnly }
          return Object.assign({}, cell, {value: action.value})
        }
        // return all the ones not changing
        return cell
      })
      
      const newState = [...state.slice(0, rowIndex), newRow, ...state.slice(rowIndex+1)]
      return newState
    case "CLEAR_PUZZLE":
      return []
    default:
      return state;
  }
}