import React, { Component } from 'react'
import Header from './Header';
import ComposeBox from './ComposeBox';
import ChatBox from './ChatBox';

export default class ChatSection extends Component {
  render() {
    let { conversation, currentUser, updateConversation, reciever, addContactedContact} = this.props; 
    return (
      <div className="chat-section">
        <Header class={reciever.length ? 'right-header' : 'hide'} currentUser={currentUser} reciever={reciever}/>
        <ChatBox conversation={conversation} currentUser={currentUser} reciever={reciever}/>
        <ComposeBox conversation={conversation} updateConversation={updateConversation} currentUser={currentUser} reciever={reciever} addContactedContact={addContactedContact}/>
      </div>
    )
  }
}
