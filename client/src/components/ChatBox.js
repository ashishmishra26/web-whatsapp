import React, { Component } from 'react'

export default class ChatBox extends Component {
  render() {
      let { conversation, currentUser, reciever } = this.props,
      messages = conversation.map((message, index) => {
        let mssgSender = message.sender.toLowerCase(),
            mssgReciever = message.reciever.toLowerCase();
        // make the message row div iff sender and reciever is either currentUser or currentReciever  
        if ((mssgSender === currentUser.toLowerCase() && mssgReciever === reciever.toLowerCase()) || (mssgSender === reciever.toLowerCase() && mssgReciever === currentUser.toLowerCase())) {
         return (<div key={index} className="message-row">
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
      <div className={this.props.reciever.length ? 'chat-box' : 'chat-box-full'} id="chat">
        {messages}
      </div>
    )
  }
}
