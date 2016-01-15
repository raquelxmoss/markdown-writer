import { UPDATE_SETTINGS, RESET_SETTINGS, TOGGLE_VISIBILITY } from '../actions/settings_actions';

const defaultSettings = {
  fontFamily: 'Rokkitt',
  color: '#3b3b3b',
  lineHeight: '120%',
  fontSize: '1.3em',
  background: '#fefefe',
  displaySettings: 'none'
}

export const settings = (state = defaultSettings, action) => {
  switch(action.type) {
    case UPDATE_SETTINGS:
      return Object.assign({}, state, action.settings)
    case RESET_SETTINGS:
      return Object.assign({}, state, defaultSettings)
    case TOGGLE_VISIBILITY:
      let displaySettings = state.displaySettings === 'none' ? 'block' : 'none'
      return Object.assign({}, state, {displaySettings: displaySettings})
    default:
      return state
  }
}