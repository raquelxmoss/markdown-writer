import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Editor from '../components/editor'
import Text from '../components/text'
import Settings from '../components/settings'
import Timer from '../components/timer'
import FileList from '../components/file_list'

const App = React.createClass({

  componentDidMount() {
    this.applySettings(this.props.settings)
  },

  componentDidUpdate() {
    this.applySettings(this.props.settings)
  },

  applySettings(settings) {
    _.each(settings, function(value, key) {
      document.body.style[key] = value
    })

    _.each(document.querySelectorAll('a'), function(link) {
      link.style.color = settings.linkColor
    })
  },

  onClick(e) {
    e.preventDefault()

    document.querySelector('.editor').focus()
  },

  saveFile() {
    this.props.saveFile(this.props.text)
  },

  render() {
    return (
      <div className='main' onClick={(e) => this.onClick(e)}>
        <Text />
        <Editor />
        <Settings />
        <div className='metadata'>
          <p>{this.props.wordCount} words | <Timer /></p>
        </div>
        <FileList />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    wordCount: state.writer.wordCount
  }
}

export default connect(mapStateToProps)(App)