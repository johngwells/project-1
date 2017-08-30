import { Component } from 'react';

class AudioEngine extends Component {

  componentWillMount() {
    // Initialize an audio context
    this.audioContext = new AudioContext();
  }

  componentWillmount() {
    // Close context on unmount
    this.audioContext.close();
  }

  shouldComponentUpdate(props) {
    return props.events.length > 0;
  }

  componentWillUpdate(props) {
    props.events.forEach(this.processEvent.bind(this));
    props.dispatch({
      type: "CLEARN_EVENT_QUEUE"
    });
  }

  processEvent(event) {
    switch(event.type) {
      case "NOTE_ON":
        // Execute note on
        break;
      case 'NOTE_OFF':
        // Note is off
        break;
    }
  }

  render() {
    return null;
  }
}

export default AudioEngine;