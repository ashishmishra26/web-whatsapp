import React, { Component } from 'react'
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export default class ComposeBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      message: ''
    }
  }
  render() {
    return (
        <form className={!this.props.reciever.length ? 'form hide': 'form'} onSubmit={(e) => {this.addMessage(e, this.state.message)}}>
          <input type="text" placeholder="Type a message" onChange={(e) => {this.changeMessage(e.target.value)}} className="compose-search-box" value={this.state.message}></input>
          <button onClick={(e) => {this.addMessage(e, this.state.message)}} className="btn"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" id=""><path fill="#263238" fillOpacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button>
        </form>
    )
  }
  /**
   * method to change message state
   */
  changeMessage = (value) => {
    this.setState({message: value});
  }
  /**
   * method to add message in conversation
   * First it sends message to socket server and then
   * call updateConversation method of prop to add converation root compoentn state
   */
  addMessage = (e, message) => {
    // if message is valid and reciever is set
    if (message.length && this.props.reciever.length) {
      
      // emit messgae 
      socket.emit('message', message);
 
      // call updateConversation
      this.props.updateConversation({
        sender: this.props.currentUser,
        reciever: this.props.reciever,
        content: message,
        timestamp: Date.now(),
        id: (Math.random()*1000000).toFixed() // give an id to each message 
      });
      
      // add current reciever to contacted list
      this.props.addContactedContact({name: this.props.reciever});

      // reset the message state after every action to set compose box to blank
      this.setState({message: ''});

      // code to auto scroll chat box div to below when message is added
      var div = document.getElementById("chat");
      div.scrollTop = div.scrollHeight;
    }
    e.preventDefault();
  }

  componentDidMount() {
    // add event listener for recieving chat from socket server
    socket.on('chat', (data) => {
      this.props.updateConversation({
        sender: this.props.reciever,
        reciever: this.props.currentUser,
        content: data,
        timestamp: Date.now(),
        id: (Math.random()*1000000).toFixed() // give an id to each message
      });

      // hide typing message div when actual message is recieved from server
      document.getElementsByClassName('typing-message')[0].classList.add('hide');

      // code to auto scroll chat box div to below when message is added
      var div = document.getElementById("chat");
      div.scrollTop = div.scrollHeight;
    });

    // event listener for typing message sent by socket server
    socket.on('typing', (data) => {

      // create a div intially and assing innerHTML to it to show typing message
      var div = document.getElementsByClassName('typing-message')[0] || document.createElement('div');
      div.className = 'typing-message';
      div.innerHTML = `${this.props.reciever} is typing a message ...`;
      document.getElementsByClassName('chat-box')[0].appendChild(div);

      // code to auto scroll chat box div to below when message is added
      var chat = document.getElementById("chat");
      chat.scrollTop = chat.scrollHeight;
    });
  }
}
