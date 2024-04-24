import Container from './Container'
import React from 'react'

const MobileMenu = (props) => {
    const {children, ...rest} = props
  return (
    <Container>
        <div {...rest}>{children}</div>
    </Container>
  )
}

export default MobileMenu