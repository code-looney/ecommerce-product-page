import React from 'react'

const HumburgerMenu = (props) => {
    const {...rest} = props;

  return (
   <button {...rest}><img {...rest} /></button>
  )
}

export default HumburgerMenu