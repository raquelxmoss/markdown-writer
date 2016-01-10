import { UPDATE_TEXT, updateText } from '../actions/writer_actions';

export const writer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.text
    default:
      return state
  }
}
