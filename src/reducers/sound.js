export default (state = null, action) => {
  switch (action.type) {
    case "SET_SOUND":
      return action.sound
    case "CLEAR_SOUND":
      return null
    default:
      return state;
  }
}