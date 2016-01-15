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
        <ul className='settings'>
          <li>
            <a href='#' onClick={ this.toggleVisibility }>
              Change colors
            </a>
          </li>
          <li>
            <a href='#' onClick={ this.resetDefaults }>
              Reset
            </a>
          </li>
        </ul>
        <div style={{display: displaySettings}}>
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

export default Settings