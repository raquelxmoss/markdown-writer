import React from 'react'
import { connect } from 'react-redux'
import Showdown from 'showdown'

const Text = React.createClass({
  renderText() {
    const converter = new Showdown.Converter(
      {
        strikethrough: true,
        tasklists: true,
        smoothLivePreview: true,
        parseImgDimensions: true
      }
    )
    return {__html: converter.makeHtml(this.props.text)}
  },

  render() {
    return (
      <div className='text'>
        {this.props.text === '' ? 'Just write...' : ''}
        <div dangerouslySetInnerHTML={this.renderText()}></div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return { text: state.writer.text }
}

export default connect(mapStateToProps)(Text)