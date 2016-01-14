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
    const { text, tail, updateText, rollbackWord, rollbackText, rollbackLine } = this.props
    return (
      <div className='main' onClick={(e) => this.onClick(e)}>
        <Text text={text} />
        <Editor
          updateText={updateText}
          rollbackText={rollbackText}
          rollbackWord={rollbackWord}
          rollbackLine={rollbackLine}
          tail={tail} />
      </div>
    )
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => dispatch(updateText(text)),
    rollbackText: () => dispatch(rollbackText()),
    rollbackWord: () => dispatch(rollbackWord()),
    rollbackLine: () => dispatch(rollbackLine())
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
    tail: state.tail
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)