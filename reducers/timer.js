import _ from 'lodash';
import Cookie from 'js-cookie';

import { UPDATE_TIMER } from '../actions/timer_actions';

const setState = () => {
  if (Cookie.get('timer') === undefined) { return 0 }

  return Cookie.get('timer')
}

export const timer = (state = setState(), action) => {
  switch (action.type) {
    case UPDATE_TIMER: {
      const newState = state + 1

      Cookie.set('timer', newState)

      return newState
    }
    default:
      return state
  }
}
