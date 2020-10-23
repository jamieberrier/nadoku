const initialState = {
  show: false,
  color: '',
  content: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return { ...state,
        show: true,
        color: action.color,
        content: action.content
      }
    case 'HIDE_MODAL':
      return initialState
    default:
      return state
  }
}