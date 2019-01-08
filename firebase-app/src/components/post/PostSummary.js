import React from 'react'

const PostSummary = ({list}) =>  {

  return (
      <div className="card z-depth-0 post-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{list.title}</span>
          <p>{list.content}</p>
          <p className="grey-text">date?</p>
        </div>
      </div>
    )
}

export default PostSummary;