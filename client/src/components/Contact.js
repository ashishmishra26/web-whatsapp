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
            return <ContactCard key={contact.contact+contact.name} data={contact} changeReciever={changeReciever}/>
        } else {
          return null;
        }
    })
    otherContacts = otherContacts.map(contact => {
      if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          return <ContactCard key={contact.id} data={contact} changeReciever={changeReciever}/>
      } else {
        return null;
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
