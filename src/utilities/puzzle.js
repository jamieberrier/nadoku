export const setCellClass = coordinates => {
  if (coordinates === 'C3' || coordinates === 'F3' || coordinates === 'C6' || coordinates === 'F6') {
    return "cell rightborder bottomborder"
  } else if (coordinates.includes('C') || coordinates.includes('F')) {
    return "cell bottomborder"
  } else if (coordinates.includes('3') || coordinates.includes('6')) {
    return "cell rightborder"
  } else {
    return "cell"
  }
}

export const square = (puzzle, rowStart, colStart) => {
  let cellSquare = []

  for (let i = 0; i < 3; i++) {
    cellSquare[i] = cellSquare[i] || []
    for (let j = 0; j < 3; j++) {
      cellSquare[i].push(puzzle[rowStart + i][colStart + j])
    }
  }
  return cellSquare
}

export const column = (puzzle, colNum) => {
  let cellColumn = []
 
  for (const row of puzzle) {
    for (const cell of row) {
      if (cell.coordinates.includes(colNum)) {
        cellColumn.push(cell)
      }
    }
  }
  return cellColumn
}

export const highlight = cell => {
  return cell.className + ' selected'
}

export const unSelect = cell => {
  return cell.className.split(' selected').shift()
}

export const conflict = cell => {
  return cell.className + ' conflict'
}

export const nonConflict = cell => {
  return cell.className.split(' conflict').shift()
}