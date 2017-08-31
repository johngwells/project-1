import React, { Component } from 'react';
import { connect } from 'react-redux';
import mouseDown from '../actions/actions';

const keyList = [
  { number: 48, label: 'J' },
  { number: 53, label: 'G' },
  { number: 55, label: 'W'}
];

class Keyboard extends Component {
  render() {
    const { downKeys } = this.props;
    return <div className="onscreen-keyboard">
      {keyList.map(function(key) {
        return (
          <button
          key={key.number}
          onMouseDown={this.mouseDown.bind(this, key.number)}
          onMouseUp={this.mouseUp.bind(this, key.number)}
          /* className={downKeys.indexOf(key.number) !== -1
            ? 'down' : ''} */
          >
            {key.label}
          </button>);
      }.bind(this))}
    </div>
  }

  mouseDown(key) {
    this.props.dispatch({
      type: 'NOTE_ON',
      key
    });
  }
  
  mouseUp(key) {
    this.props.dispatch({
      type: 'NOTE_OFF',
      key
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseDown: (data) => {
      dispatch(mouseDown(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Keyboard);
// export default Keyboard;