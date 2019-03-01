import React, { Component } from 'react'

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
          <input type="text" placeholder="Type a message" onChange={(e) => {this.changeMessage(e.target.value)}} onSubmitCapture={() => {this.addMessage(this.state.message)}} className="compose-search-box" value={this.state.message}></input>
          <div className="send-btn"><button onClick={(e) => {this.addMessage(e, this.state.message)}} className="btn"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" id=""><path fill="#263238" fillOpacity=".45" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button></div>
        </form>
    )
  }
  changeMessage = (value) => {
    this.setState({message: value});
  }
  addMessage = (e, message) => {
    let conversation = this.props.conversation;
    if (message.length) {
      conversation.push({
        sender: this.props.currentUser,
        reciever: this.props.reciever,
        content: message,
        timestamp: Date.now()
      });
      this.props.updateConversation(conversation);
      this.setState({message: ''});
      var div = document.getElementById("chat");
      div.scrollTop = div.scrollHeight;
    }
    e.preventDefault();
  }
}
