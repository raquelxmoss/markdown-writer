import React from 'react';
import { connect } from 'react-redux';

import Editor from '../components/editor';
import Text from '../components/text';
import { updateText, rollbackText, rollbackWord, rollbackLine } from '../actions/writer_actions';

const App = React.createClass({
  onClick(e) {
    e.preventDefault();
    document.querySelector('.editor').focus();
  },

  render() {
    const { dispatch, text, tail } = this.props
    return (
      <div className='main' onClick={(e) => this.onClick(e)}>
        <Text text={text} />
        <Editor
          updateText={(text) => dispatch(updateText(text))}
          rollbackText={() => dispatch(rollbackText())}
          rollbackWord={() => dispatch(rollbackWord())}
          rollbackLine={() => dispatch(rollbackLine())}
          tail={tail} />
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    text: state.text,
    tail: state.tail
  }
}

export default connect(mapStateToProps)(App)