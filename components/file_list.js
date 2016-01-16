import React from 'react';
import { connect } from 'react-redux';

const FileList = React.createClass({
  render() {
    const files = this.props.files

    return (
      <ul>
        {files.length > 0 ?
          files.map((file, i) => {
          return <li key={i}>{file.text}</li>
        }) : ''}
      </ul>
    )
  }
});

const mapStateToProps = (state) => {
  return { files: state.fileList }
}

export default connect(mapStateToProps)(FileList)