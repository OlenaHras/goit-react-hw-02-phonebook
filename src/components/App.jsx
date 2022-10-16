import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import defaultContacts from './contacts'

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  handleSubmitInfo = data => {
    this.state.contacts.find(el => el.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState({
          contacts: this.state.contacts.concat([data]),
        });
  };

  handleSearch = data => {
    this.setState({
      filter: data,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitInfo} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleSearch} />
        <ContactList contacts={this.filterContacts()} />
      </div>
    );
  }
}
