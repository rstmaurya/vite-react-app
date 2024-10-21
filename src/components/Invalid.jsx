import React from 'react'
import { Link } from 'react-router-dom'

const Invalid = () => {
  return (
    <div>
      <h4> Sorry 😤😤😏😏  wrong Credentials..!! try again </h4>

      <Link to='/' className='btn btn-warning p-2 fw-bold'>Try Again</Link>
    </div>
  )
}

export default Invalid
