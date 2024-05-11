import React from 'react'

const Sale = (props) => {
    const {children, ...rest} = props;
    
  return (
    <span {...rest}>{children}</span>
  )
}

export default Sale