import Cookie from 'js-cookie';

import { SAVE_FILE } from '../actions/file_list_actions';

const initialState = Cookie.get('files')

const setState = () => {
  const files = JSON.parse(Cookie.get('files'))

  if (files) { return files }

  return []
}

export const fileList = (state = setState(), action) => {
  switch (action.type) {
    case SAVE_FILE: {
      const newState = [...state, action.file]

      Cookie.set('files', newState)

      return newState
    }
    default:
      return state
  }
}