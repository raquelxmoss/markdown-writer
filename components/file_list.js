import React from 'react'
import { connect } from 'react-redux'
import ellipsize from 'ellipsize'

import { deleteFile } from '../actions/file_list_actions'
import { toggleVisibility } from '../actions/settings_actions'
import { loadFile } from '../actions/writer_actions'
import { loadTimer } from '../actions/timer_actions'

const FileList = React.createClass({
  deleteFile (id) {
    this.props.deleteFile(id)
  },

  loadFile(id) {
    this.props.loadFile(this.props.files[id])
    this.props.loadTimer(this.props.files[id].duration)
  },

  renderList(files) {
    return(
      <ul>
        {files.length > 0 ?
          files.map((file, i) => {
            const title = ellipsize(file.text, 50)
            return (
              <li key={i}>
                <a href='#' onClick={ () => this.loadFile(i) }>
                  {title}
                </a>
                  <a href='#' onClick={ () => this.deleteFile(i) }><i className="fa fa-trash-o"></i>
</a>
              </li>
            )
          })
        : ''}
      </ul>
    )
  },

  renderFileToggler(state) {
    return(
      <a href='#' onClick={() => this.props.toggleFiles('fileList')}>
        {state === 'block' ? '(hide)' : '(show)'}
      </a>
    )
  },

  render () {
    const files = this.props.files
    return (
      <div>
        <h3>Entries {this.renderFileToggler(this.props.showEntries)}</h3>
        <div style={{display: this.props.showEntries}}>
          {this.renderList(files)}
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    files: state.fileList,
    showEntries: state.settings.displaySettings.fileList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFile: (id) => dispatch(deleteFile(id)),
    toggleFiles: (setting) => dispatch(toggleVisibility(setting)),
    loadFile: (file) => dispatch(loadFile(file)),
    loadTimer: (startTime) => dispatch(loadTimer(startTime))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileList)