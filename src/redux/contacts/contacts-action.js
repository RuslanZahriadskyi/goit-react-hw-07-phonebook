import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

//========================================================
//Redux Toolkit

const deleteContact = createAction('contact/delete');
const filterContacts = createAction('contact/filter');
const addContact = createAction('contact/add', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));
const showAllContacts = createAction('contact/show');

//===========================================================
// without Redux Toolkit

// const addContact = (name, number) => {
// return { type: types.ADD, payload: { id: uuidv4(), name, number } };
// };
// const deleteContact = id => {
//   return { type: types.DELETE, payload: id };
// };
// const filterContacts = text => {
//   return { type: types.FILTER, payload: text };
// };

export { addContact, deleteContact, filterContacts, showAllContacts };
