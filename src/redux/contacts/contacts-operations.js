import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  initContactsRequest,
  initContactsSuccess,
  initContactsError,
} from './contacts-action';

axios.defaults.baseURL = 'http://localhost:3004';

const initContacts = () => dispatch => {
  dispatch(initContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(initContactsSuccess(data));
    })
    .catch(error => dispatch(initContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      console.log('data', data);
      dispatch(addContactSuccess(data));
    })
    .catch(error => {
      console.log(error);
      dispatch(addContactError(error));
    });
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
    })
    .catch(error => dispatch(deleteContactError(error)));
};

export { addContact, deleteContact, initContacts };
