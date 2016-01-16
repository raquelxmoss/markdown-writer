export const SAVE_FILE = 'SAVE_FILE'

export const saveFile = (text) => {
  return {
    type: SAVE_FILE,
    file: {
      text,
      timestamp: new Date()
    }
  };
}