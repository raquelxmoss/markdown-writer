export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const RESET_SETTINGS = 'RESET_SETTINGS'

export const updateSettings = (settings) => {
  return {
    type: UPDATE_SETTINGS,
    settings
  };
}

export const resetSettings = (settings) => {
  return {
    type: RESET_SETTINGS
  }
}