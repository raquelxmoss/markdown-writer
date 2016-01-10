import React from 'react';
import { connect } from 'react-redux';

import Editor from '../components/editor';
import Text from '../components/text';
import { UPDATE_TEXT, updateText } from '../actions/writer_actions';

const App = React.createClass({
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Text text={this.props.text} />
        <Editor updateText={(text) => dispatch(updateText(text))} />
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return { text: state }
}

export default connect(mapStateToProps)(App)