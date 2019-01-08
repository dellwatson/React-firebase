import React from 'react';
import PostSummary from './PostSummary';

function PostLists({posts}) {
  
  const postList = posts && posts.map((post) => {
    return (<PostSummary list={post} key={post.id} />)
  })
  return (
    <div className="post-list section">
      {postList}
    </div>
  )
}

export default PostLists;
