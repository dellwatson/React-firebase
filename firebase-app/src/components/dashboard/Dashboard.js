import React, { Component } from 'react'
import PostLists from '../post/PostLists';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <PostLists />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;