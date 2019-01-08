import React from 'react';
import { Link } from 'react-router-dom';

const PostSummary = ({list}) =>  {
  return (
      <div className="card z-depth-0 post-summary">
        <div className="card-content grey-text text-darken-3">
          <Link to={'/post/'+list.id}>
            <span className="card-title">{list.title}</span>
          </Link>
            <p>{list.id}</p>
          <p className="grey-text">date?</p>
        </div>
      </div>
    )
}

export default PostSummary;