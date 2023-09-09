import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Link to={"/"}>Home으로 이동</Link>
    </div>
  )
}

export default User