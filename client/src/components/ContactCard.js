import React, { Component } from 'react'

export default class ContactCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      imageColor: ''
    }
  }

  render() {
    let {data, disableClick} = this.props,
    {imageColor} = this.state;

    return (
      <div className="contact-card" onClick={(e)=>{!disableClick && this.handleClick(e, data)}}>
        <div className="contact-card-image-container">
            <div className="contact-card-image" style={{backgroundColor: imageColor.length ? imageColor : this.getColor(), opacity: 0.8}}>
                <div className="image-text">{data.name[0].toUpperCase()}</div>
            </div>
        </div>
        <div className="contact-card-content">{data.name.toString()}</div>
      </div>
    )
  }
  /**
   * handler for contact card click
   */
  handleClick = (e, data) => {
     this.props.changeReciever(data.name); // update the reciever
     // change the color of selected card
     for(const iterator of document.getElementsByClassName('contact-card-content')) {
      iterator.classList.remove('selected')
     }
     e.target.classList.toggle('selected');
  }
  /**
   * method to assign a color to contacts initially
   */
  getColor () {
    let color = '#'+(Math.random() * 1000000).toFixed(0);
    this.setState({imageColor: color});
  }
}
