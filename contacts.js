const fs = require('fs/promises');
const path = require('path');
const { randomUUID } = require('crypto');

const readContent = async () => {
    const content = await fs.readFile(path.join(__dirname, 'contacts.json'), 'utf-8');
    const result = JSON.parse(content);
    return result
}

async function listContacts() {  
    return await readContent();
}

async function getContactById(contactId) {
  const contacts = await readContent();
  const contact = contacts.find(FilteredContact => FilteredContact.id === contactId);
  return contact
}

async function removeContact(contactId) {
  const contacts = await readContent();
  const index = contacts.findIndex(contact => contact.id === contactId)
  if (index === -1) {
    return null
  } 
  const filteredContacts = contacts.filter(FilteredContact => FilteredContact.id !== contactId);
  await fs.writeFile(
    path.join(__dirname, 'contacts.json'),
    JSON.stringify(filteredContacts, null, 2),  
  )
  return contacts[index]
}

async function addContact(name, email, phone) {
  const contacts = await readContent();
  const newContact = {
    id: randomUUID(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, 'contacts.json'),
    JSON.stringify(contacts, null, 2),  
  )
  return newContact
}


module.exports = { listContacts, getContactById, removeContact, addContact };