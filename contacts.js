const fs = require('fs/promises');
const path = require('path');
const { randomUUID } = require('crypto');

const readContent = async () => {
    const content = await fs.readFile(path.join(__dirname, 'contacts.json'), 'utf-8');
    const result = JSON.parse(content);
    return result
}

// contacts.js

/*
 * Раскомментируй и запиши значение
*/

// const contactsPath = ;
// TODO: задокументировать каждую функцию
async function listContacts() {
  // ...твой код
    return await readContent();
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}


module.exports = { listContacts, getContactById, removeContact, addContact };