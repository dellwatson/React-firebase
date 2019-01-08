import React, { Component } from 'react';
import PostLists from '../post/PostLists';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
  const { posts, auth } = this.props;
  if (!auth.uid) return <Redirect to='/login' />

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
  // console.log(state)
  return {
    posts: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects'}
    ])
  )(Dashboard);