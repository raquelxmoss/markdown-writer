export const UPDATE_SETTINGS = 'UPDATE_SETTINGS'
export const RESET_SETTINGS = 'RESET_SETTINGS'
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'
export const CHANGE_ACTIVE_SETTING = 'CHANGE_ACTIVE_SETTING'

export const updateSettings = (settings) => {
  return {
    type: UPDATE_SETTINGS,
    settings
  }
}

export const resetSettings = (settings) => {
  return {
    type: RESET_SETTINGS
  }
}

export const toggleVisibility = (setting) => {
  return {
    type: TOGGLE_VISIBILITY,
    setting
  }
}

export const changeActiveSetting = (setting) => {
  return {
    type: CHANGE_ACTIVE_SETTING,
    setting
  }
}