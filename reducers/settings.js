import { UPDATE_SETTINGS, RESET_SETTINGS } from '../actions/settings_actions';

const defaultSettings = {
  fontFamily: 'Rokkitt',
  color: '#3b3b3b',
  lineHeight: '120%',
  fontSize: '1em',
  background: '#fefefe'
}

export const settings = (state = defaultSettings, action) => {
  switch(action.type) {
    case UPDATE_SETTINGS:
      return Object.assign({}, state, action.settings)
    case RESET_SETTINGS:
      return Object.assign({}, state, defaultSettings)
    default:
      return state
  }
}