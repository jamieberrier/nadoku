export default (state = [], action) => {
  switch (action.type) {
    case "SET_PUZZLE":
      return state.concat(action.puzzle)
    default:
      return state;
  }
}