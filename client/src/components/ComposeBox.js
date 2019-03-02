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
        <form className="compose-box" onSubmit={(e) => {this.addMessage(e, this.state.message)}}>
          <input type="text" placeholder="Type a message" onChange={(e) => {this.changeMessage(e.target.value)}} className="compose-search-box" value={this.state.message}></input>
          <div className="send-btn"><button onClick={(e) => {this.addMessage(e, this.state.message)}} className="btn"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" id=""><path fill="#263238" fillOpacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button></div>
        </form>
    )
  }
  changeMessage = (value) => {
    this.setState({message: value});
  }
  addMessage = (e, message) => {
    if (message.length && this.props.reciever.length) {
      socket.emit('message', message);

      this.props.updateConversation({
        sender: this.props.currentUser,
        reciever: this.props.reciever,
        content: message,
        timestamp: Date.now(),
        id: (Math.random()*1000000).toFixed()
      });

      this.props.addContactedContact({name: this.props.reciever});
      this.setState({message: ''});

      var div = document.getElementById("chat");
      div.scrollTop = div.scrollHeight;
    }
    e.preventDefault();
  }
  componentDidMount() {
    socket.on('chat', (data) => {
      this.props.updateConversation({
        sender: this.props.reciever,
        reciever: this.props.currentUser,
        content: data,
        timestamp: Date.now(),
        id: (Math.random()*1000000).toFixed()
      });
      var div = document.getElementById("chat");
      div.scrollTop = div.scrollHeight;
    });
  }
}
