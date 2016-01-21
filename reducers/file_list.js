import Cookie from 'js-cookie'
import _ from 'lodash'

import { SAVE_FILE, DELETE_FILE } from '../actions/file_list_actions'

const initialState = Cookie.get('files')

const setState = () => {
  const files = Cookie.get('files')

  if (files) { return JSON.parse(files) }

  return []
}

const saveExistingFile = (state, updatedFile) => {
  let newState

  if (state.length === 0) {
    newState = [updatedFile]
  } else {
    const removeFile = _.flatten([_.slice(state, 0, updatedFile.id), _.slice(state, updatedFile.id + 1, state.length)])
    newState = [...removeFile, updatedFile]
  }

  Cookie.set('files', newState)

  return newState
}

export const fileList = (state = setState(), action) => {
  switch (action.type) {
    case SAVE_FILE: {
      const file = state[action.file.id]

      if (file) {
        return saveExistingFile(state, action.file)
      }

      const newState = [...state, action.file]

      Cookie.set('files', newState)

      return newState
    }
    case DELETE_FILE: {
      const newState = _.flatten([_.slice(state, 0, action.id), _.slice(state, action.id + 1, state.length)])

      Cookie.set('files', newState)

      return newState
    }
    default:
      return state
  }
}