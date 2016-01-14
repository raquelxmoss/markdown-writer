export const UPDATE_TEXT = 'UPDATE_TEXT'
export const ROLLBACK_TEXT = 'ROLLBACK_TEXT'
export const ROLLBACK_WORD = 'ROLLBACK_WORD'
export const ROLLBACK_LINE = 'ROLLBACK_LINE'

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

export const rollbackWord = () => {
  return {
    type: ROLLBACK_WORD
  }
}

export const rollbackLine = () => {
  return {
    type: ROLLBACK_LINE
  }
}