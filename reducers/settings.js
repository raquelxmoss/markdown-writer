import Cookie from 'js-cookie';

import { UPDATE_SETTINGS, RESET_SETTINGS, TOGGLE_VISIBILITY } from '../actions/settings_actions';

const defaultSettings = {
  fontFamily: 'Rokkitt',
  color: '#3b3b3b',
  lineHeight: '120%',
  fontSize: '1.3em',
  background: '#fefefe',
  displaySettings: 'none'
}

const setState = () => {
  if(Cookie.get('settings') === undefined) { return defaultSettings }

  return JSON.parse(Cookie.get('settings'))
}

export const settings = (state = setState(), action) => {
  switch(action.type) {
    case UPDATE_SETTINGS: {
      const newSettings = Object.assign({}, state, action.settings)

      Cookie.set('settings', newSettings);

      return newSettings
    }
    case RESET_SETTINGS: {
      Cookie.set('settings', defaultSettings)

      return Object.assign({}, state, defaultSettings)
    }
    case TOGGLE_VISIBILITY: {
      const displaySettings = state.displaySettings === 'none' ? 'block' : 'none'

      const newSettings = Object.assign({}, state, {displaySettings: displaySettings})

      Cookie.set('settings', newSettings)

      return newSettings
    }
    default:
      return state
  }
}