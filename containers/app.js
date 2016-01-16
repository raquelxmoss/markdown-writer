import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Editor from '../components/editor';
import Text from '../components/text';
import Settings from '../components/settings';
import FileList from '../components/file_list';

import { updateText, rollbackText, rollbackWord, rollbackLine, clearText } from '../actions/writer_actions';
import { updateSettings, resetSettings, toggleVisibility } from '../actions/settings_actions.js';
import { saveFile } from '../actions/fileList_actions';

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

  saveFile() {
    this.props.saveFile(this.props.text)
  },

  render() {
    const {
      text, tail, files, updateText, rollbackWord,
      rollbackText, rollbackLine, settings, updateSettings,
      resetSettings, toggleVisibility, clearText,
      saveFile } = this.props

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
          toggleVisibility={toggleVisibility}
          clearText={clearText}
          saveFile={this.saveFile} />
        <FileList
          files={files} />
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
    clearText: () => dispatch(clearText()),
    updateSettings: (settings) => dispatch(updateSettings(settings)),
    resetSettings: () => dispatch(resetSettings()),
    toggleVisibility: (key) => dispatch(toggleVisibility(key)),
    saveFile: (text) => dispatch(saveFile(text))
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.writer.text,
    tail: state.writer.tail,
    settings: state.settings,
    files: state.fileList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)