import React from 'react';
import { connect } from 'react-redux';

import Editor from '../components/editor';
import Text from '../components/text';
import { updateText, rollbackText } from '../actions/writer_actions';

const App = React.createClass({
  render() {
    const { dispatch, text, tail } = this.props
    return (
      <div className='main'>
        <Text text={text} />
        <Editor
          updateText={(text) => dispatch(updateText(text))}
          rollbackText={() => dispatch(rollbackText())}
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