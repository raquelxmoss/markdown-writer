import React from 'react';

const Editor = React.createClass({
  updateText() {
    const updateText = this.props
    const text = this.refs.editor.value.trim()
    this.props.updateText(text)
  },

  render() {
    return (
      <textarea rows="5" className="editor" ref="editor" onChange={() => this.updateText()}></textarea>
    )
  }
});

export default Editor