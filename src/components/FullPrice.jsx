import React from 'react'

const FullPrice = (props) => {
    const {children, ...rest} = props;

  return (
    <span {...rest}>{children}</span>
  )
}

export default FullPrice