import React, { Component } from 'react'
import ContactCard from './ContactCard';

export default class Contact extends Component {
  render() {
    let {allContact, contactedContact, changeReciever, isActive, searchText} = this.props,
    visibleContact = [],
    otherContacts = allContact.filter(contact => {
      return contactedContact.indexOf(contact) === -1;
    });
    visibleContact = contactedContact.map(contact => {
        if (contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
            return <ContactCard key={contact.contact} data={contact} changeReciever={changeReciever}/>
        }
    })
    otherContacts = otherContacts.map(contact => {
      if (searchText.length && contact.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
          return <ContactCard key={contact.contact} data={contact} changeReciever={changeReciever}/>
      }
    })
    return (
      <div className="contact">
        <p className={visibleContact.length ? 'contact-title' : 'contact-title hide'}>Chats</p>
        {visibleContact}
        <p className={otherContacts.length ? 'contact-title' : 'contact-title hide'}>Contacts</p>
        {isActive && otherContacts}
      </div>
    )
  }
}
