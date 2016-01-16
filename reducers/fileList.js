import Cookie from 'js-cookie';

import { SAVE_FILE } from '../actions/fileList_actions';

const initialState = Cookie.get('files')

export const fileList = (state = initialState || [], action) => {
  switch (action.type) {
    case SAVE_FILE: {
      const newFile = {timestamp: new Date(), text: action.text}
      const newState = [...state, newFile]
      debugger
      Cookie.set('files', newState)

      return newState
    }
    default:
      return state
  }
}