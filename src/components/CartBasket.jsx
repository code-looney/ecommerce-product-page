import React from 'react'
import Container from './Container'

const CartBasket = (props) => {
    const {children, ...rest} = props;

  return (
    <Container {...rest}>{children}</Container>
  )
}

export default CartBasket