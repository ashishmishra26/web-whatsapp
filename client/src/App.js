import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import ChatSection from './components/ChatSection';
import users from './data/users';
import server from './utils/apiServices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: users[0].name,
      allContact: users,
      contactedContact: [users[1]],
      reciever: '',
      conversation: []
    }
  }
  render() {
    let {allContact, contactedContact} = this.state;
    return (
      <div className="App">
       <SideBar allContact={allContact} contactedContact={contactedContact} changeReciever={this.changeReciever}/>
       <ChatSection conversation={this.state.conversation} currentUser={this.state.currentUser} updateConversation={this.updateConversation } reciever={this.state.reciever}/>
      </div>
    );
  }

  changeReciever = (reciever) => {
    this.setState({reciever: reciever});
  }

  updateConversation = (conversation) => {
    this.setState({conversation: conversation});
  }

  componentDidMount = () => {
    server.get('/api').then((response) => {
      console.log(response.data);
      this.setState({conversation: response.data})
    })
  }
}

export default App;
