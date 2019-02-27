import React, { Component } from 'react'

export default class ContactCard extends Component {
  render() {
    let {data} = this.props;  
    return (
      <div className="contact-card">
        <div className="contact-card-image-container">
            <div className="contact-card-image" style={{backgroundColor: '#'+(Math.random() * 1000000).toFixed(0), opacity: 0.8}}>
                <div className="image-text">{data.name[0].toUpperCase()}</div>
            </div>
        </div>
        <div className="contact-card-content">{data.name}</div>
      </div>
    )
  }
}
