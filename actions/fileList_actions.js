export const SAVE_FILE = 'SAVE_FILE'

export const saveFile = (text) => {
  return {
    type: SAVE_FILE,
    text
  };
}