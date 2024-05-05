import Container from './Container'
import React from 'react'

const Rule = (props) => {
  const {...rest} = props;
  return (
    <hr {...rest} />
  )
}

export default Rule