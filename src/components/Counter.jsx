import React from 'react'

const Counter = (props) => {
    const {children, ...rest} = props;

  return (
    <span {...rest}>{children}</span>
  )
}

export default Counter