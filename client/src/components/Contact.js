import React, { Component } from 'react'
import ContactCard from './ContactCard';

export default class Contact extends Component {
  render() {
    let {contactedContact, changeReciever} = this.props,
    visibleContact = [];
    visibleContact = contactedContact.map((contact) => {
        if (contact.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1) {
            return <ContactCard key={contact.contact} data={contact} changeReciever={changeReciever}/>
        }
    })
    return (
      <div>
        {visibleContact}
      </div>
    )
  }
}
