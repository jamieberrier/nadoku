export default (state = [], action) => {
    switch (action.type) {
      case "SET_REMAINING":
        return action.numbers
      case "CLEAR_REMAINING":
        return []
      default:
        return state;
    }
  }