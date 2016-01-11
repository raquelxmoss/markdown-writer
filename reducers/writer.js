import _ from 'lodash';

import { UPDATE_TEXT, ROLLBACK_TEXT, updateText } from '../actions/writer_actions';

const trimText = (text) => {
  const chars = text.split('')

  if (chars.length === 1) { return '' }

  const newWords = _.initial(chars).join('')
  return _.padRight(newWords, newWords.length - 1, ' ')
}

const getTail = (text) => {
  const words = text.split()
  const tail = words.length > 1 ? _.last(words) : ''

  return tail
}

export const writer = (state = { text: '', tail: '' }, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return  Object.assign({}, state, { text: state.text += action.text, tail: '' })
    case ROLLBACK_TEXT: {
      return Object.assign({}, state, { text: trimText(state.text), tail: getTail(state.text) })
    }
    default:
      return state
  }
}
