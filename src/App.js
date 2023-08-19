import React, { Component } from 'react';
import LeftSidebar from './components/LeftSidebar';
import HomeSection from './components/HomeSection';
import './index.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <LeftSidebar />
        <HomeSection />
      </div>
    );
  }
}

export default App;
