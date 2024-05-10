import React from 'react'

const Title = (props) => {
    const {children, ...rest} = props;

  return (
    <h1 {...rest}>{children}</h1>
  )
}

export default Title