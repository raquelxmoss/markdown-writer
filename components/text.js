import React from 'react';
import Showdown from 'showdown';

const Text = React.createClass({
  renderText() {
    const converter = new Showdown.Converter(
      {
        strikethrough: true,
        tasklists: true,
        smoothLivePreview: true
      }
    )
    return {__html: converter.makeHtml(this.props.text)};
  },

  render() {
    return (
      <div>
        {this.props.text === '' ? 'Just write...' : ''}
        <div dangerouslySetInnerHTML={this.renderText()}></div>
      </div>
    )
  }
});

export default Text