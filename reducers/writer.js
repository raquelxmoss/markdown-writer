import _ from 'lodash';
import Cookie from 'js-cookie';

import { UPDATE_TEXT, ROLLBACK_TEXT, ROLLBACK_WORD, ROLLBACK_LINE, CLEAR_TEXT, LOAD_FILE } from '../actions/writer_actions';

const trimText = (text) => {
  const chars = text.split('')

  if (chars.length === 1) { return '' }

  const newWords = _.initial(chars).join('')

  return _.padRight(newWords, newWords.length - 1, ' ')
}

const getTail = (text) => {
  const words = text.split('')
  const tail = words.length > 1 ? _.last(words) : ''

  return tail
}

const removeLastWord = (text) => {
  let words = text.split(' ')

  if (words.length === 1) {
    words = text.split(/\n/)
  }

  return _.compact(_.initial(words)).join(' ')
}

const removeLine = (text) => {
  const lines = text.split(/\n/)
  const lastSpace = _.lastIndexOf(lines, '')

  const newText =  _.slice(lines, 0, lastSpace).join(' ')

  return newText
}

const wordCount = (text) => {
  return _.compact(text.split(' ')).length
}

const setState = () => {
  if (Cookie.get('text') === undefined) { return { loadedFileId: null, text: '', tail: '', wordCount: 0 } }

  const stateFromCookie = Cookie.get('text')

  return {
    loadedFileId: Cookie.get('loadedFileId'),
    text: stateFromCookie,
    tail: '',
    wordCount: wordCount(stateFromCookie)
  }
}

export const writer = (state = setState(), action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      const newText = state.text += action.text

      const newState = Object.assign({}, state, { text: newText, tail: '', wordCount: wordCount(newText) })

      Cookie.set('text', newState.text)

      return newState
    }
    case CLEAR_TEXT: {
      const newText = ''

      const newState = Object.assign({}, state, { loadedFileId: null, text: newText, wordCount: wordCount(newText) })

      Cookie.set('text', newState.text)
      Cookie.remove('loadedFileId')

      return newState
    }
    case ROLLBACK_TEXT: {
      const newText = trimText(state.text)

      const newState = Object.assign({}, state, { text: newText, tail: getTail(state.text), wordCount: wordCount(newText) })

      Cookie.set('text', newState.text)

      return newState
    }
    case ROLLBACK_WORD: {
      const newText = removeLastWord(state.text)

      const newState = Object.assign({}, state, { text: newText, tail: getTail(state.text), wordCount: wordCount(newText) })

      Cookie.set('text', newState.text)

      return newState
    }
    case ROLLBACK_LINE: {
      const newText = removeLine(state.text)

      const newState = Object.assign({}, state, { text: newText, tail: getTail(state.text), wordCount: wordCount(newText) })

      Cookie.set('text', newState.text)

      return newState
    }
    case LOAD_FILE: {
      const file = action.file

      const newState = Object.assign({}, state, {loadedFileId: file.id, text: file.text, tail: '', wordCount: wordCount(file.text)})

      Cookie.set('text', newState.text)
      Cookie.set('loadedFileId', newState.loadedFileId)

      return newState
    }
    default:
      return state
  }
}
