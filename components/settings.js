import React from 'react';
import ColorPicker from 'react-color';

const Settings = React.createClass({
  updateBackground(color) {
    this.props.updateSettings({ background: `#${color.hex}` })
  },

  updateText(color) {
    this.props.updateSettings({ color: `#${color.hex}` })
  },

  render() {
    const { background, color } = this.props.settings

    return (
      <div>
       <ColorPicker
         type="chrome"
         onChange={ this.updateBackground }
         color={ background }
         display={ this.props.displayBackgroundColorPicker } />

       <ColorPicker
         type="chrome"
         onChange={ this.updateText }
         color={ color }
         display={ this.props.displayTextColorPicker } />
      </div>
    )
  }
});

export default Settings