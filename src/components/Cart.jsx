import React from 'react'
import Container from './Container'

const Cart = (props) => {
    const {children, ...rest} = props;

  return (
    <Container {...rest}>{children}</Container>
  )
}

export default Cart