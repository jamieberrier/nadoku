// syncronous action creators
export const setSelectedNumber = number => {
  return {
    type: 'SET_SELECTED_NUMBER',
    number
  }
}
  
  export const clearSelectedNumber = () => {
  return {
    type: 'CLEAR_SELECTED_NUMBER'
  }
}