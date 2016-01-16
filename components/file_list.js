import React from 'react';

const FileList = React.createClass({
  render() {
    const files = JSON.parse(this.props.files)

    return (
      <div>
        {files.length > 0 ?
          files.map((file, i) => {
          return <p key={i}>{file.text}</p>
        }) : ''}
      </div>
    )
  }
});

export default FileList