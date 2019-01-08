import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

class SignUp extends Component {
  state = {
    email : "",
    password: "",
    firstName: "",
    lastName: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />

    return (
      <div>
        <form className="SignUp" onSubmit={this.handleSubmit}>
          <input type="email" id="email" onChange={this.handleChange} />
          <input type="password" id="password" onChange={this.handleChange} />
          <input type="text" id="firstName" onChange={this.handleChange} />
          <input type="text" id="lastName" onChange={this.handleChange} />
          <button className="submit"> SignUp </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(SignUp)