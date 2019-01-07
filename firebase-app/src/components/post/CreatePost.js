import React, { Component } from 'react'

class CreatePost extends Component {
  state = {
    title:"",
    post:""
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
      <div className="container">
        <form className="CreatePost white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3"> Post Something</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Post title</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" id="post" onChange={this.handleChange} ></textarea>
            <label htmlFor="post">write post</label>
          </div>
          <div className="input-field">
            <button className="submit"> Create Post </button>
          </div>
        </form>
      </div>
    )
  }
}


export default CreatePost