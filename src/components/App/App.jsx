import { Box } from '../Box';
import React, { Component } from 'react';
import { ContactForm } from '../ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from '../ContactList';
import { Filter } from '../Filter';

const STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    data && this.setState({ contacts: data });
  }

  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextContacts));
  }

  preventRecurringEvent = name =>
    this.state.contacts.some(e => e.name === name);

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContacts = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.preventRecurringEvent(name))
      return alert(`${name} is already in the contact book`);

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  getVisibleContacts = _ => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box bg="primary" p={5}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </Box>
    );
  }
}
