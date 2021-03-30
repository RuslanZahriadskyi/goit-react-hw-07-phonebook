// import * as contactsAction from '../../redux/contacts/contacts-action';
import s from './ContactList.module.css';

import { Component } from 'react';

class ContactList extends Component {
  componentDidMount() {
    this.props.initContacts();
  }

  render() {
    const { contacts, deleteContact, filterValue } = this.props;
    return (
      <ul className={s.contacts__list}>
        {contacts
          .filter(({ name }) => {
            const findContact = name
              .toLowerCase()
              .indexOf(filterValue.toLowerCase());
            return findContact === -1 ? false : true;
          })
          .map(({ name, number, id }) => (
            <li key={id} className={s.contact__info}>
              <p className={s.contact}>
                <span className={s.contact__name}>{name}:</span>
                <span className={s.contact__number}>{number}</span>
              </p>
              <button
                className={s.contact__button}
                type="button"
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;
