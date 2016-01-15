import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Editor from '../components/editor';
import Text from '../components/text';
import Settings from '../components/settings';

import { updateText, rollbackText, rollbackWord, rollbackLine } from '../actions/writer_actions';
import { updateSettings, resetSettings, toggleVisibility } from '../actions/settings_actions.js'

const App = React.createClass({

  componentDidMount() {
    this.applySettings(this.props.settings)
  },

  componentDidUpdate() {
    this.applySettings(this.props.settings)
  },

  applySettings(settings) {
    _.each(settings, function(value, key) {
      document.body.style[key] = value
    });
  },

  onClick(e) {
    e.preventDefault();
    document.querySelector('.editor').focus();
  },

  render() {
    const {
      text, tail, updateText, rollbackWord,
      rollbackText, rollbackLine, settings, updateSettings,
      resetSettings, toggleVisibility } = this.props

    return (
      <div className='main' onClick={(e) => this.onClick(e)}>
        <Text text={text} />
        <Editor
          updateText={updateText}
          rollbackText={rollbackText}
          rollbackWord={rollbackWord}
          rollbackLine={rollbackLine}
          tail={tail} />
        <Settings
          settings={settings}
          updateSettings={updateSettings}
          resetSettings={resetSettings}
          toggleVisibility={toggleVisibility} />
      </div>
    )
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => dispatch(updateText(text)),
    rollbackText: () => dispatch(rollbackText()),
    rollbackWord: () => dispatch(rollbackWord()),
    rollbackLine: () => dispatch(rollbackLine()),
    updateSettings: (settings) => dispatch(updateSettings(settings)),
    resetSettings: () => dispatch(resetSettings()),
    toggleVisibility: (key) => dispatch(toggleVisibility(key))
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.writer.text,
    tail: state.writer.tail,
    settings: state.settings
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)