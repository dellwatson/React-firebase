import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom'

class CreatePost extends Component {
  state = {
    title:"",
    post:""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPostsz(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPostsz : (post) => { dispatch(createPost(post)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)