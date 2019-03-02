import React, { Component } from 'react'
import ContactCard from './ContactCard';

export default class Contact extends Component {
  render() {
    let {allContact, contactedContact, changeReciever, isActive, searchText} = this.props,
    visibleContact = [],
    otherContacts = allContact.filter(contact => {
      let present = true;
      contactedContact.forEach(element => {
        if(element.name === contact.name) {
          present = false;
        }
      });
      return present;
    });
    visibleContact = contactedContact.map(contact => {
        if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
            return <ContactCard key={contact.name} data={contact} changeReciever={changeReciever}/>
        }
    })
    otherContacts = otherContacts.map(contact => {
      if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          return <ContactCard key={contact.name} data={contact} changeReciever={changeReciever}/>
      }
    })
    return (
      <div className="contact">
        <p className={isActive ? 'contact-title': 'hide'}>Chats</p>
        {visibleContact}
        <p className={isActive ? 'contact-title': 'hide'}>Contacts</p>
        {isActive && otherContacts}
      </div>
    )
  }
}
