import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';


function PostDetails(props) {
  const { post } = props;
  if (post) {
    return (
      <div className="container-center">
          <div className="container section post-details">
            <div className="card z-depth-0">
              <span className="card-title"> 
                {post.title}
              </span>
              <div className="card-action grey lighten-4 grey-text">
                {post.content}
              </div>
              <div className="card-name">
                created by  {post.authorFirstName}
              </div>
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className="container-center">
        Loading...
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.projects;
  const post = posts ? posts[id] : null
  // console.log(post)
  return {
    post: post
  }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects'}])
)(PostDetails)