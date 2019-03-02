import React, { Component } from 'react'

export default class ChatBox extends Component {
  render() {
      let { conversation, currentUser, reciever } = this.props,
      messages = conversation.map((message) => {
          if ((message.sender.toLowerCase() === currentUser.toLowerCase() && message.reciever.toLowerCase() === reciever.toLowerCase()) || (message.sender.toLowerCase() === reciever.toLowerCase() && message.reciever.toLowerCase() === currentUser.toLowerCase())) {
         return (<div key={message.id} className="message-row">
                    <div className={message.sender.toLowerCase() === currentUser.toLowerCase() ? 'message-content-right': 'message-content-left'}>
                        {message.content}
                        <span className="message-content-time">{`${new Date(message.timestamp).getHours()}:${new Date(message.timestamp).getMinutes()}`}</span>
                    </div>
                </div>)
          } else {
            return null;
          }
      });
    return (
      <div className="chat-box" id="chat">
        {messages}
      </div>
    )
  }
}
