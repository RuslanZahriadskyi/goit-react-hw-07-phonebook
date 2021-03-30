const getAllContacts = state => state.contacts.items;

const getFilterValue = state => state.contacts.filter;

export { getAllContacts, getFilterValue };
