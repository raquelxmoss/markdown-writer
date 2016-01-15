import React from 'react';
import ColorPicker from 'react-color';
import _ from 'lodash';

const Settings = React.createClass({
  updateBackground(color) {
    this.props.updateSettings({ background: `#${color.hex}` })
  },

  updateText(color) {
    this.props.updateSettings({ color: `#${color.hex}` })
  },

  toggleVisibility(e) {
    e.preventDefault()
    this.props.toggleVisibility()
  },

  resetDefaults(e) {
    e.preventDefault()

    this.props.resetSettings()
  },

  render() {
    const { background, color, displaySettings } = this.props.settings

    return (
      <div>
        <a href='#' onClick={ this.toggleVisibility }>
          Change colors
        </a>
        <a href='#' onClick={ this.resetDefaults }>
          Reset
        </a>
        <div style={{display: displaySettings}}>
         <ColorPicker
           type='chrome'
           onChangeComplete={ this.updateBackground }
           color={ background } />

         <ColorPicker
           type='chrome'
           onChangeComplete={ this.updateText }
           color={ color } />
        </div>
      </div>
    )
  }
});

export default Settings