import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email : "",
    password: ""
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
    return (
      <div>
        <form className="SignIn" onSubmit={this.handleSubmit}>
          <input type="email" id="email" onChange={this.handleChange} />
          <input type="password" id="password" onChange={this.handleChange} />
          <button className="submit">Login </button>
        </form>
      </div>
    )
  }
}


export default SignIn