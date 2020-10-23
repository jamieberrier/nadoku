export const showModal = (color, content) => {
  return {
      type: 'SHOW_MODAL',
      color,
      content
  }
}
  
export const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  }
}