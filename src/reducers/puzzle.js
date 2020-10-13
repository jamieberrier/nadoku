/*
<input
  className={setCellClass(cell.coordinates)}
  id={cell.coordinates}
  key={cell.coordinates}
  onChange={handleOnChange}
  onClick={handleOnClick}
  readOnly={cell.readOnly}
  data-rowindex={index}
  value={value} 
  color={}
/>
*/
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
    case "CHECK_CELL_VALUE":
      debugger
      return state
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