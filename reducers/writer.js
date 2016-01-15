import _ from 'lodash';
import Cookie from 'js-cookie';

import { UPDATE_TEXT, ROLLBACK_TEXT, ROLLBACK_WORD, ROLLBACK_LINE, CLEAR_TEXT } from '../actions/writer_actions';

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

export const writer = (state = { text: Cookie.get('text') || '', tail: '' }, action) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      const newState = Object.assign({}, state, { text: state.text += action.text, tail: '' })

      Cookie.set('text', newState.text)

      return newState
    }
    case CLEAR_TEXT: {
      const newState = Object.assign({}, state, { text: '' })

      Cookie.set('text', newState.text)

      return newState
    }
    case ROLLBACK_TEXT: {
      const newState = Object.assign({}, state, { text: trimText(state.text), tail: getTail(state.text) })

      Cookie.set('text', newState.text)

      return newState
    }
    case ROLLBACK_WORD: {
      const newState = Object.assign({}, state, { text: removeLastWord(state.text), tail: getTail(state.text) })

      Cookie.set('text', newState.text)

      return newState
    }
    case ROLLBACK_LINE: {
      const newState = Object.assign({}, state, { text: removeLine(state.text), tail: getTail(state.text) })

      Cookie.set('text', newState.text)

      return newState
    }
    default:
      return state
  }
}
