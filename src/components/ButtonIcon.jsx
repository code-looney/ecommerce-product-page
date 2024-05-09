import React from 'react'
import clsx from 'clsx'

const ButtonIcon = (props) => {
    const {classnameiconbtn, ...rest} = props

  return (
    <button className={classnameiconbtn} ><img {...rest} /></button>
  )
}

export default ButtonIcon