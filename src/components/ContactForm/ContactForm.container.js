import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = {
  addContact: contactsOperations.addContact,
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
