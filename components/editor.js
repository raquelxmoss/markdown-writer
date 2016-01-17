import React from 'react'
import { connect } from 'react-redux'

import { updateText, rollbackText, rollbackWord, rollbackLine } from '../actions/writer_actions'

const Editor = React.createClass({
  componentDidMount() {
    this.refs.editor.focus()

    document.addEventListener('keydown', this.handleBackspace)
  },

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleBackspace)
  },

  updateText() {
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
})

const mapStateToProps = (state) => {
  return {
    tail: state.writer.tail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateText: (text) => dispatch(updateText(text)),
    rollbackText: () => dispatch(rollbackText()),
    rollbackWord: () => dispatch(rollbackWord()),
    rollbackLine: () => dispatch(rollbackLine()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)