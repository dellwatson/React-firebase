import React from 'react';
import PostSummary from './PostSummary';

function PostLists({posts}) {

  const postList = posts.map((list) => {
    return (<PostSummary list={list} key={list.id} />)
  })
  return (
    <div className="post-list section">
      {postList}
    </div>
  )
}

export default PostLists;
