import React from 'react';
import PropTypes from 'prop-types';
import {
  Ul,
  ContactItems,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled';

function ContactItem({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <Button onClick={handleDelete}>delete</Button>
    </ContactItems>
  );
}

function ContactList({ contacts, deleteContact }) {
  return (
    <Ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </Ul>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
