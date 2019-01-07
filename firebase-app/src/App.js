import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
