import React from 'react'

const Amount = (props) => {
    const {children, ...rest} = props;
    
  return (
    <span {...rest}>{children}</span>
  )
}

export default Amount