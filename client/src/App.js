import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import ChatSection from './components/ChatSection';

class App extends Component {
  render() {
    return (
      <div className="App">
       <SideBar />
       <ChatSection />
      </div>
    );
  }
}

export default App;
