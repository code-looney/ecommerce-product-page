import React from 'react'

const Paragraph = (props) => {
    const {children, ...rest} = props;

  return (
    <p {...rest}>{children}</p>
  )
}

export default Paragraph