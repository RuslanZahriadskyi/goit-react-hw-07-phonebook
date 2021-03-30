import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
  filterValue: contactsSelectors.getFilterValue(state),
});

const mapDispatchToProps = {
  deleteContact: id => contactsOperations.deleteContact(id),
  initContacts: contactsOperations.initContacts,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),

  filterValue: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
