import React from 'react'

const MarkdownSyntax = (props) => {
  return (
    <span className='syntax-reference' style={{ fontSize: 'smaller' }}>
      <span><strong>*bold*</strong> <em>_italics_</em> ~~strikethrough~~  > quote
      </span>
    </span>
  )
}

export default MarkdownSyntax