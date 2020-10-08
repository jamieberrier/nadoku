// syncronous action creators
export const setDifficulty = difficulty => {
  return {
    type: 'SET_DIFFICULTY',
    difficulty
  }
}
  
export const clearDifficulty = () => {
  return {
    type: 'CLEAR_DIFFICULTY'
  }
}
  