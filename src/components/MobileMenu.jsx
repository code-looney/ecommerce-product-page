import Container from './Container'
import React from 'react'

const MobileMenu = (props) => {
    const {children, ...rest} = props
  return (
        <Container {...rest}>{children}</Container>
  )
}

export default MobileMenu