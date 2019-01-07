import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreatePost from './components/post/CreatePost';
import PostDetails from './components/post/PostDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/create" component={CreatePost} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
