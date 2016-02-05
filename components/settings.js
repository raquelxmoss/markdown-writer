import React from 'react'
import { connect } from 'react-redux'
import ColorPicker from 'react-color'
import _ from 'lodash'

import { updateSettings, resetSettings, toggleVisibility, changeActiveSetting } from '../actions/settings_actions.js'
import { clearText, loadFile } from '../actions/writer_actions'
import { resetTimer } from '../actions/timer_actions'
import { saveFile } from '../actions/file_list_actions'
import MarkdownSyntax from './markdown_syntax'


const Settings = React.createClass({
  updateColorSettings(color) {
    const activeSetting = this.props.settings.activeSetting

    const selectSetting = {
      'background': { background: `#${color.hex}` },
      'color': { color: `#${color.hex}` },
      'linkColor': { linkColor: `#${color.hex}`}
    }

    this.props.updateSettings(selectSetting[activeSetting])
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

    const { files, text, timer, loadedFileId } = this.props
    const id = loadedFileId === null ? files.length : loadedFileId

    const file = { text: text, duration: timer, id: id }

    this.props.saveFile(file)
    this.props.loadFile(file)
  },

  activeColor() {
    const activeSetting = this.props.settings.activeSetting

    return this.props.settings[activeSetting]
  },

  render() {
    const { background, color, displaySettings, activeSetting } = this.props.settings

    return (
      <div className='settings'>
        <ul>
          <li>
            <a href='#' onClick={ this.clearText }>
              New
            </a>
          </li>
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
            <MarkdownSyntax />
          </li>
        </ul>
        <div style={{ display: displaySettings.settings }}>
          <div className='settings-panel'>
            <p>
              <li className='color-setting'
                style={activeSetting === 'background' ? { color: 'goldenrod' } : {}}
                onClick={ () => this.props.changeActiveSetting('background') }>
                  Background color
              </li>
              <li className='color-setting'
                style={activeSetting === 'color' ? { color: 'goldenrod' } : {}}
                onClick={ () => this.props.changeActiveSetting('color') }>
                  Text color
              </li>
              <li className='color-setting'
                style={activeSetting === 'linkColor' ? { color: 'goldenrod' } : {}}
                onClick={ () => this.props.changeActiveSetting('linkColor') }>
                  Link color
              </li>
            </p>
            <ColorPicker
              type={'chrome'}
              onChange={ this.updateColorSettings }
              color={ this.activeColor() }/>
          </div>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    text: state.writer.text,
    timer: state.timer,
    files: state.fileList,
    loadedFileId: state.writer.loadedFileId
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearText: () => dispatch(clearText()),
    updateSettings: (settings) => dispatch(updateSettings(settings)),
    resetSettings: () => dispatch(resetSettings()),
    toggleVisibility: (key) => dispatch(toggleVisibility(key)),
    resetTimer: () => dispatch(resetTimer()),
    saveFile: (file) => dispatch(saveFile(file)),
    loadFile: (file) => dispatch(loadFile(file)),
    changeActiveSetting: (setting) => dispatch(changeActiveSetting(setting))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)