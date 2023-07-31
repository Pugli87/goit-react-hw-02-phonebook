import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Heading2, Text } from './App.styled';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  addContact = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <Title>phonebook</Title>
        <ContactForm addContact={this.addContact} contacts={contacts} />

        <Heading2>contacts</Heading2>
        <Text>find contacts by name</Text>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
