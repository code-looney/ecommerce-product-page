import React from 'react'

const Container = (props) => {
    const {children, className, ...rest} = props;

  return (
    <div className={className} {...rest}>{children}</div>
  )
}

export default Container