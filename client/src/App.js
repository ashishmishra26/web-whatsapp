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
       <SideBar allContact={allContact} contactedContact={contactedContact} changeReciever={this.changeReciever} currentUser={this.state.currentUser} reciever={this.state.reciever}/>
       <ChatSection conversation={this.state.conversation} currentUser={this.state.currentUser} updateConversation={this.updateConversation } reciever={this.state.reciever} addContactedContact={this.addContactedContact}/>
      </div>
    );
  }

  /**
   * method to set reciever state
   */
  changeReciever = (reciever) => {
    this.setState({reciever: reciever});
  }

  /**
   * method to set converation state
   */
  updateConversation = (conversation) => {
    server.post('/api/', conversation).then((response) => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });
    let conv = [...this.state.conversation, conversation];
    this.setState({conversation: conv});
  }

  /**method to set contacted contact
  * 
  */
  addContactedContact = (contact) => {
    let contactedContact = [...this.state.contactedContact], present = false, currentUser = this.state.currentUser;
    contactedContact.forEach(cont => {
      if(cont.name === (contact.name || currentUser)) {
        present = true;
      }
    });
    if (!present) {
    contact['id'] = (Math.random()*100000000).toFixed(0);
    this.setState({contactedContact: [...this.state.contactedContact, contact]});
    }
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
      if (recievers[key].name !== this.state.currentUser) {
      result.push(recievers[key]);
      }
    }
    this.setState({contactedContact: result});
  }
}

export default App;
