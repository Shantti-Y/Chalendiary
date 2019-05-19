export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = value => {
  return {
    type: CHANGE_VALUE,
    value: value
  }
}

export const clearValue = () => {
  return {
    type: CHANGE_VALUE,
    value: ''
  }
}