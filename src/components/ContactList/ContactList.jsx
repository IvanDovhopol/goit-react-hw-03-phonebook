import { Btn } from 'components/App/App.styled';
import { Table, Heading, Row, Body, Notification } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContacts }) =>
  contacts.length ? (
    <Table>
      <thead>
        <tr>
          <Heading>Name</Heading>
          <Heading>Number</Heading>
        </tr>
      </thead>

      <tbody>
        {contacts.map(({ id, name, number }) => (
          <Row key={id}>
            <Body>{name}</Body>
            <Body>{number}</Body>
            <Body>
              <Btn type="button" onClick={() => onDeleteContacts(id)}>
                Delete
              </Btn>
            </Body>
          </Row>
        ))}
      </tbody>
    </Table>
  ) : (
    <Notification>Contact not found 😢</Notification>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
