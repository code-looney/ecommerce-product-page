import React from 'react'

const BasePrice = (props) => {
    const {children, ...rest} = props;

  return (
    <span {...rest}>{children}</span>
  )
}

export default BasePrice