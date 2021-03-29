import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contacts-action';

axios.defaults.baseURL = 'http://localhost:3004';

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

export { addContact };
