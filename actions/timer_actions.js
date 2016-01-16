export const UPDATE_TIMER = 'UPDATE_TIMER'
export const RESET_TIMER = 'RESET_TIMER'

export const updateTimer = () => {
  return {
    type: UPDATE_TIMER
  }
}

export const resetTimer = () => {
  return {
    type: RESET_TIMER
  }
}