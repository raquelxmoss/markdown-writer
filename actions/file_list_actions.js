export const SAVE_FILE = 'SAVE_FILE'
export const DELETE_FILE = 'DELETE_FILE'

export const saveFile = (file) => {
  return {
    type: SAVE_FILE,
    file: {
      id: file.id,
      text: file.text,
      duration: file.duration,
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