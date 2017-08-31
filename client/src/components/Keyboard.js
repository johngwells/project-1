import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mouseDown, mouseUp } from '../actions/actions';
import { bindActionCreators } from 'redux';

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
    return {
      type: 'NOTE_ON',
      key
    };
  }
  
  mouseUp(key) {
    return {
      type: 'NOTE_OFF',
      key
    };
  }
}

const mapStateToProps = (state) => {
  return {
    actions: state.mouseDown
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ mouseDown: mouseDown, mouseUp: mouseUp }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
// export default Keyboard;