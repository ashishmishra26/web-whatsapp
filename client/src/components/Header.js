import React, { Component } from 'react'
import ContactCard from './ContactCard';

export default class Header extends Component {
  render() {
    let { currentUser, reciever } = this.props;
    return (
      <div className={this.props.class} onClick={(e)=>{e.preventDefault()}}>
      <ContactCard data={this.props.class === 'left-header' ? {name: currentUser} : {name: reciever || ' '}} disableClick={true}/>
      </div>
    )
  }
}
