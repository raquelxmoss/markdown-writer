import React from 'react';

const Editor = React.createClass({
  componentDidMount() {
    this.refs.editor.focus()
  },

  updateText() {
    const updateText = this.props
    const text = this.refs.editor.value
    this.props.updateText(text)
    this.refs.editor.value = ''
  },

  handleBackspace(e) {
    if (e.keyCode !== 8) { return };
    this.props.rollbackText();
  },

  render() {
    return (
      <div>
      <textarea
        className="editor"
        ref="editor"
        rows="1"
        onKeyDown={(e) => this.handleBackspace(e)}
        onInput={() => this.updateText()}
        defaultValue={this.props.tail} />
      </div>
    )
  }
});

export default Editor