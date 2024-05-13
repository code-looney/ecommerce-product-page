import React from 'react'

const Icon = (props) => {
    const {children, ...rest} = props;

  return (
    <img {...rest} />
  )
}

export default Icon