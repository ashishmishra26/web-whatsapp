import React, { Component } from 'react'
import ContactCard from './ContactCard';

export default class Contact extends Component {
  render() {
    let {allContact, contactedContact, changeReciever, isActive, searchText, reciever} = this.props,
    visibleContact = [],
    // filter contacted contacts from all contacts
    otherContacts = allContact.filter(contact => {
      let present = true;
      contactedContact.forEach(element => {
        if(element.name === contact.name) {
          present = false;
        }
      });
      return present;
    });

    // create contacted contact array consisting of ContactCard component
    visibleContact = contactedContact.map((contact,index) => {
        if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
            return <ContactCard key={index} data={contact} reciever={reciever} changeReciever={changeReciever}/>
        } else {
          return null;
        }
    });

    // create all other contact array consisting of ContactCard component
    otherContacts = otherContacts.map((contact,index) => {
      if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          return <ContactCard key={index} data={contact} reciever={reciever} changeReciever={changeReciever}/>
      } else {
        return null;
      }
    });

    return (
      <div className="contact">
        <p className={isActive ? 'contact-title': 'hide'}>Chats</p> {/* show this text only when isActive is true*/}
        {visibleContact}
        <p className={isActive ? 'contact-title': 'hide'}>Contacts</p> {/* show this text only when isActive is true*/}
        {isActive && otherContacts}
      </div>
    )
  }
}
