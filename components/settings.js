import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from 'react-color';
import _ from 'lodash';

import { updateSettings, resetSettings, toggleVisibility } from '../actions/settings_actions.js'
import { clearText } from '../actions/writer_actions';
import { resetTimer } from '../actions/timer_actions';
import { saveFile } from '../actions/file_list_actions';


const Settings = React.createClass({
  updateBackground(color) {
    this.props.updateSettings({ background: `#${color.hex}` })
  },

  updateText(color) {
    this.props.updateSettings({ color: `#${color.hex}` })
  },

  toggleVisibility(e) {
    e.preventDefault()

    this.props.toggleVisibility('settings')
  },

  resetDefaults(e) {
    e.preventDefault()

    this.props.resetSettings()
  },

  clearText(e) {
    e.preventDefault()

    this.props.clearText()
    this.props.resetTimer()
  },

  saveFile(e) {
    e.preventDefault()

    this.props.saveFile(this.props.text)
  },

  render() {
    const { background, color, displaySettings } = this.props.settings

    return (
      <div>
        <ul className='settings'>
          <li>
            <a href='#' onClick={ this.saveFile }>
              Save
            </a>
          </li>
          <li>
            <a href='#' onClick={ this.toggleVisibility }>
              { displaySettings.settings === 'none' ? `Change colors` : `Hide` }
            </a>
          </li>
          <li>
            <a href='#' onClick={ this.resetDefaults }>
              Reset
            </a>
          </li>
          <li>
            <a href='#' onClick={ this.clearText }>
              Clear text
            </a>
          </li>
        </ul>
        <div style={{display: displaySettings.settings}}>
          <div className='settings-panel'>
            <p>Background color:</p>
             <ColorPicker
               type='chrome'
               onChange={ this.updateBackground }
               color={ background } />
          </div>

          <div className='settings-panel'>
            <p>Text color: </p>
             <ColorPicker
               type='chrome'
               onChange={ this.updateText }
               color={ color } />
             </div>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    text: state.writer.text
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearText: () => dispatch(clearText()),
    updateSettings: (settings) => dispatch(updateSettings(settings)),
    resetSettings: () => dispatch(resetSettings()),
    toggleVisibility: (key) => dispatch(toggleVisibility(key)),
    resetTimer: () => dispatch(resetTimer()),
    saveFile: (text) => dispatch(saveFile(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)