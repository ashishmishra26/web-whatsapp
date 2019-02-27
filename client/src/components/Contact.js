import React, { Component } from 'react'
import ContactCard from './ContactCard';

export default class Contact extends Component {
  render() {
    let {contactedContact} = this.props,
    visibleContact = [];
    visibleContact = contactedContact.map((contact) => {
        if (contact.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) !== -1) {
            return <ContactCard key={contact.contact} data={contact}/>
        }
    })
    return (
      <div>
        {visibleContact}
      </div>
    )
  }
}
