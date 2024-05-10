import React from 'react'
import clsx from 'clsx'

const ButtonIcon = (props) => {
    const {classnameiconbtn, onClick, disabled, ...rest} = props

  return (
    <button disabled={disabled} onClick={onClick} className={classnameiconbtn} ><img {...rest} /></button>
  )
}

export default ButtonIcon