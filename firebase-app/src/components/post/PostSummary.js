import React, { Component } from 'react'

class PostSummary extends Component {
  render() {
    return (
      <div className="card z-depth-0 post-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title"> title/name ? save icon</span>
          <p>comment here ...</p>
          <p className="grey-text">date?</p>
        </div>
      </div>
    )
  }
}

export default PostSummary;