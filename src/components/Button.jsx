import React from 'react'

const Button = (props) => {
    const {children, ...rest} = props;

  return (
    <button {...rest}>{children}</button>
  )
}

export default Button