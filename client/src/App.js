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
      currentUser: 'Ashish Mishra',
      allContact: users,
      reciever: '',
      conversation: [],
      contactedContact: [],
    }
  }
  render() {
    let {allContact, contactedContact} = this.state;
    return (
      <div className="App">
       <SideBar allContact={allContact} contactedContact={contactedContact} changeReciever={this.changeReciever}/>
       <ChatSection conversation={this.state.conversation} currentUser={this.state.currentUser} updateConversation={this.updateConversation } reciever={this.state.reciever} addContactedContact={this.addContactedContact}/>
      </div>
    );
  }

  changeReciever = (reciever) => {
    this.setState({reciever: reciever});
  }

  updateConversation = (conversation) => {
    server.post('/api/', conversation).then((response) => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
    let conv = [...this.state.conversation, conversation];
    this.setState({conversation: conv});
  }

  addContactedContact = (contact) => {
    this.setState({contactedContact: [...this.state.contactedContact, contact]});
  }

  componentDidMount () {
    server.get('/api').then((response) => {
      this.setState({conversation: response.data});
      this.extractContactedContact();
    }).catch(err => {
      console.log(err);
    })
  }

  extractContactedContact = () => {
    let data = [...this.state.conversation], recievers = {}, result = [];
      data.forEach(message => {
      recievers[message.reciever.toLowerCase()] = {name: message.reciever};
    });
    for (let key in recievers) {
      result.push(recievers[key]);
    }
    this.setState({contactedContact: result});
  }
}

export default App;
