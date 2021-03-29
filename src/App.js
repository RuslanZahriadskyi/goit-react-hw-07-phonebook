import React from 'react';
import s from './App.module.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
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

export default App;
