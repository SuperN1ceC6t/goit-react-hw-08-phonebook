import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/constacts/operations';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
  UserDeletedIcon,
} from './ListItem.module';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        console.log(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        console.log("Sorry, something's wrong");
      });
  };

  return (
    <ContactItem key={id}>
      <ContactName>Name: {name}</ContactName>
      <ContactNumber>Number: {number}</ContactNumber>
      <Button onClick={() => handleDeleteContact(id)}>
        <UserDeletedIcon />
        Delete
      </Button>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
