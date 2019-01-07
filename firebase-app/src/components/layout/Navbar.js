import React, { Component } from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <SignedInLinks />
            {/* <SignedOutLinks /> */}
        </div>
      </nav>
    )
  }
}

export default Navbar;