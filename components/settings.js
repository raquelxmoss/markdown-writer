import React from 'react';
import ColorPicker from 'react-color';

const Settings = React.createClass({
  updateBackground(color) {
    document.body.style.background = `#${color.hex}`
  },

  updateText(color) {
    document.body.style.color = `#${color.hex}`
  },

  render() {
    const { background, color } = this.props.settings
    return (
      <div>
       <ColorPicker type="chrome" onChange={ this.updateBackground } />
       <ColorPicker type="chrome" onChange={ this.updateText } />
      </div>
    )
  }
});

export default Settings