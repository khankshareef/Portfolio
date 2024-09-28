import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Contact from './components/Contact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
const LOCAL_STORAGE_KEY="contacts";
const [contacts, setcontacts] = useState([]);
const ContactHandler = (contact)=>{
  console.log(contact);
  setcontacts([...contacts,{id: uuid(),...contact}])
};
const removeContactHandeler =(id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  });

  setcontacts(newContactList);
}

useEffect(()=>{
 const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if(retriveContacts) setcontacts(retriveContacts)
},[]);
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);


  return (
    <div className='ui container'>
      <Header/>
      <Contact ContactHandler={ContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandeler}/>

    </div>
  )
}

export default App