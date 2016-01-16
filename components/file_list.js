import React from 'react';
import { connect } from 'react-redux';
import ellipsize from 'ellipsize';

import { deleteFile } from '../actions/file_list_actions';

const FileList = React.createClass({
  deleteFile (id) {
    this.props.deleteFile(id)
  },

  render () {
    const files = this.props.files
    return (
      <ul>
        {files.length > 0 ?
          files.map((file, i) => {
            const title = ellipsize(file.text, 50)
            return (
              <li key={i}>
                {title} <a href='#' onClick={ () => this.deleteFile(i)}>(delete)</a>
              </li>
            )
          }) : ''}
      </ul>
    )
  }
});

const mapStateToProps = (state) => {
  return { files: state.fileList }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFile: (id) => dispatch(deleteFile(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)