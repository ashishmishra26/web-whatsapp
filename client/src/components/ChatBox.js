import React, { Component } from 'react'

export default class ChatBox extends Component {
  render() {
      let { conversation, currentUser, reciever } = this.props,
      messages = conversation.map((message) => {
          if (message.sender.toLowerCase() === currentUser.toLowerCase() && message.reciever.toLowerCase() === reciever.toLowerCase()) {
         return (<div key={message.timestamp} className="message-row">
                    <div className={message.sender.toLowerCase() === currentUser.toLowerCase() ? 'message-content-right': 'message-content-left'}>
                        {message.content}
                    </div>
                </div>)
          }
      });
    return (
      <div className="chat-box" id="chat">
        {messages}
      </div>
    )
  }
}
