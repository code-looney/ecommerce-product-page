import React from 'react'

const Profile = (props) => {
    const {...rest} = props;

  return (
    <button><img {...rest} /></button>
  )
}

export default Profile