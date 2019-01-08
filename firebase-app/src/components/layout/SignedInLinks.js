import React from 'react';
import { NavLink } from 'react-router-dom';


function SignedInLinks(props) {
  // console.log(props)
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Post</NavLink></li> 
        <li><NavLink to='/login'>Login</NavLink></li>      
        <li><NavLink to='/'>Dashboard</NavLink></li>      
      </ul>
    </div>
  )
}

export default SignedInLinks;