import React from 'react'

const CartIcon = (props) => {
    const {...rest} = props;

  return (
    <button><img {...rest} /></button>
  )
}

export default CartIcon