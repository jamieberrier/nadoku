export default (state = null, action) => {
    switch (action.type) {
      case "SET_SELECTED_NUMBER":
        return action.number
      case "CLEAR_SELECTED_NUMBER":
        return null
      default:
        return state;
    }
  }