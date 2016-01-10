import React from 'react';
import { connect } from 'react-redux';

import Editor from '../components/editor';
import Text from '../components/text';
import { UPDATE_TEXT, updateText } from '../actions/writer_actions';

const App = React.createClass({
  render() {
    return (
      <div>
        <Text text={this.props.text} />
        <Editor />
      </div>
    )
  }
});


const mapStateToProps = (state) => {
  return { text: state }
}

const mapDispatchToProps = (state) => {
  return { updateText }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)