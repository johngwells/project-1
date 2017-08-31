
const Immutable = require('immutable');

export default function reducer(state, action) {
  switch (action.type) {
    case 'NOTE_ON':
      return state.update('downKeys', downKeys => {
        return downKeys.push(action.key);
      }).update('events', events => {
        return events.push(action);
      })

    case 'NOTE_OFF':
      return state.update('downKeys', downKeys => {
        return downKeys.filter(downKey => {
          return downKey !== action.key;
        })
      })
        .update('events', events => {
          return events.push(action);
        });

    case 'CLEAR_EVENT_QUEUE':
      return state
        .set('events', new Immutable.List());

    default:
      return state;
  }
}