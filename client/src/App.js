import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import ChatSection from './components/ChatSection';
import users from './data/users'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: users[0],
      allContact: users,
      contactedContact: [...users.slice(1,6)]
    }
  }
  render() {
    let {allContact, contactedContact} = this.state;
    return (
      <div className="App">
       <SideBar allContact={allContact} contactedContact={contactedContact}/>
       <ChatSection/>
      </div>
    );
  }
}

export default App;
