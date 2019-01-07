import React from 'react'
import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <SignedInLinks />
            {/* <SignedOutLinks /> */}
        </div>
      </nav>
    )
  
}

export default Navbar;