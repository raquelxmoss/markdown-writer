export const SAVE_FILE = 'SAVE_FILE'
export const DELETE_FILE = 'DELETE_FILE'

export const saveFile = (text) => {
  return {
    type: SAVE_FILE,
    file: {
      text,
      timestamp: new Date()
    }
  };
}

export const deleteFile = (id) => {
  return {
    type: DELETE_FILE,
    id
  }
}