import React from 'react';
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/login'>Sign In</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
