import React, { Component } from 'react';
import { signIn } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class SignIn extends Component {
  state = {
    email : "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
    //push history to dashboard
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  render() {
    const { authError } = this.props
    return (
      <div>
        <form className="SignIn" onSubmit={this.handleSubmit}>
          <input type="email" id="email" onChange={this.handleChange} />
          <input type="password" id="password" onChange={this.handleChange} />
          <button className="submit">Login </button>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateTopProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn : (creds) => { dispatch(signIn(creds))} 
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(SignIn)