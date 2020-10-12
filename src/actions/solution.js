// syncronous action creators
export const setSolution = solutionString => {
  return {
    type: 'SET_SOLUTION',
    solutionString
  }
}

export const clearSolution = () => {
  return {
    type: 'CLEAR_SOLUTION'
  }
}