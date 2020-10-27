// syncronous action creators
export const setSound = sound => {
  return {
    type: 'SET_SOUND',
    sound
  }
}

export const clearSound = () => {
  return {
    type: 'CLEAR_SOUND'
  }
}