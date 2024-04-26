import Container from './Container'
import React from 'react'

const Menu = (props) => {
    const {children, ...rest} = props
  return (
    <Container>
        <div {...rest}>{children}</div>
    </Container>
  )
}

export default Menu