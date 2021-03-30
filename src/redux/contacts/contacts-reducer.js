// import * as actions from './contacts-action';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  initContactsRequest,
  initContactsSuccess,
  initContactsError,
} from './contacts-action';

//================================================b===============
//Redux Toolkit

const itemsReducers = createReducer([], {
  [initContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [initContactsRequest]: () => true,
  [initContactsSuccess]: () => false,
  [initContactsError]: () => false,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

//=================================================================
//without Redux Toolkit

// const innitialItems = [];

// const itemsReducers = (state = innitialItems, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

const reducers = { itemsReducers, filterReducer, loading };

export default reducers;
