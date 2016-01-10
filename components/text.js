import React from 'react';
import Showdown from 'showdown';

const Text = React.createClass({
  renderText() {
    const converter = new Showdown.Converter()
    return {__html: converter.makeHtml(this.props.text)};
  },

  render() {
    return (
      <div dangerouslySetInnerHTML={this.renderText()}></div>
    )
  }
});

export default Text