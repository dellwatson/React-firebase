import React, { Component } from 'react'
import PostLists from '../post/PostLists';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
  const { posts } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostLists posts={posts}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.post.posts
  }
}

export default connect(mapStateToProps)(Dashboard);