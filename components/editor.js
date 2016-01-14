import React from 'react';

const Editor = React.createClass({
  componentDidMount() {
    this.refs.editor.focus()

    document.addEventListener('keydown', this.handleBackspace)
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleBackspace)
  },

  updateText() {
    const updateText = this.props
    const text = this.refs.editor.value

    this.props.updateText(text)
    this.refs.editor.value = ''
  },

  handleBackspace(e) {
    if (e.keyCode !== 8) { return }

    if (e.altKey) {
      this.props.rollbackWord()
    } else if (e.metaKey) {
      this.props.rollbackLine()
    } else {
      this.props.rollbackText()
    }
  },

  render() {
    return (
      <div>
        <textarea
          className='editor'
          ref='editor'
          rows='1'
          onInput={() => this.updateText()}
          defaultValue={this.props.tail} />
      </div>
    )
  }
});

export default Editor