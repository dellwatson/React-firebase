import React, { Component } from 'react'

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


export default SignUp