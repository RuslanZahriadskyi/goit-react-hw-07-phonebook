import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './App.module.css';
import * as contactsAction from './redux/contacts/contacts-action';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  componentDidMount() {
    const { showAllContacts } = this.props;
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      showAllContacts(parseContacts);
    }
  }

  componentDidUpdate(prevProps, _) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <div className={s.container}>
          <h2 className={s.contacts__title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  showAllContacts: contactsAction.showAllContacts,
};

App.propTypes = {
  showAllContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
