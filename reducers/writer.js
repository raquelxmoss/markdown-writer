import _ from 'lodash';

import { UPDATE_TEXT, ROLLBACK_TEXT, ROLLBACK_WORD, ROLLBACK_LINE } from '../actions/writer_actions';

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

export const writer = (state = { text: '', tail: '' }, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return  Object.assign({}, state, { text: state.text += action.text, tail: '' })
    case ROLLBACK_TEXT: {
      return Object.assign({}, state, { text: trimText(state.text), tail: getTail(state.text) })
    }
    case ROLLBACK_WORD: {
      return Object.assign({}, state, { text: removeLastWord(state.text), tail: getTail(state.text) })
    }
    case ROLLBACK_LINE: {
      return Object.assign({}, state, { text: removeLine(state.text), tail: getTail(state.text) })
    }
    default:
      return state
  }
}
