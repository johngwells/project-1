import { Component } from 'react';
import { connect } from 'react-redux';

class AudioEngine extends Component {

  componentWillMount() {
    // Initialize an audio context
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this._playingNotes = [];
  }

  componentWillUnmount() {
    // Close context on unmount
    this.audioContext.close();
  }

  // shouldComponentUpdate(props) {
  //   return props.events.length > 0;
  // }

  componentWillReceiveProps(props) {
    if (props.events.length) {
      props.events
      .forEach(this.processEvent.bind(this));
    props.dispatch({
   type: "CLEAR_EVENT_QUEUE"
   });
 }
}

  processEvent(event) {
    switch(event.type) {
      case "NOTE_ON":
        // Execute note on
        var osc = this.audioContext.createOscillator();
        osc.frequency.value = this.noteNumberToFrequency(event.key);
        osc.start(this.audioContext.currentTime);
        osc.type = 'square';
        osc.connect(this.audioContext.destination);
        this._playingNotes.push({
          key: event.key,
          osc
        })
        break;
      case 'NOTE_OFF':
        // Note is off
        this._playingNotes.filter(note => {
          return note.key === event.key;
        }).forEach(note => {
          note.osc.stop(this.audioContext.currentTime);
        });
        break;
    }
  }

  render() {
    return null;
  }

  noteNumberToFrequency(num) {
    return Math.pow(2, (num - 69) / 12) * 440;
  }
}

// const ConnectedSynthEngine = connect((store) => {
//   return {
//     events: store.get('events').toJS()
//   };
// })(AudioEngine);

export default AudioEngine;