export const UPDATE_TEXT = 'UPDATE_TEXT'
export const ROLLBACK_TEXT = 'ROLLBACK_TEXT'

export const updateText = (text) => {
  return {
    type: UPDATE_TEXT,
    text
  };
}

export const rollbackText = () => {
  return {
    type: ROLLBACK_TEXT
  }
}
