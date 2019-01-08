import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';


const Navbar = (props) => {

    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
        { props.auth.isEmpty ? <SignedOutLinks />  : <SignedInLinks /> }
        </div>
      </nav>
    )
  
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);