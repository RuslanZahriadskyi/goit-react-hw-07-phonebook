import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducers from './contacts/contacts-reducer';
//import * as types from './contacts/contacts-types';

//==================================================
// Redux Toolkit

const contactsReducer = combineReducers({
  items: reducers.itemsReducers,
  filter: reducers.filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

//=======================================================
// without Redux Toolkit

// const contactsReducer = combineReducers({
//   items: reducers.itemsReducers,
//   filter: reducers.filterReducer,
// });

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

export default store;
