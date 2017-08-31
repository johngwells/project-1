export const mouseDown = key => {
  return {
    type: 'NOTE_ON',
    key
  };
}

export const mouseUp = key => {
  return {
    type: 'NOTE_OFF',
    key
  };
}