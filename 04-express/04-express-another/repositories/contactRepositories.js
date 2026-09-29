const contacts = [
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Bob' }
  ];
  
  const findAll = () => {
    return contacts;
  };
  
  const findById = (id) => {
    return contacts.find((item) => item.id === id);
  };
  
  const create = ({ name, phone }) => {
    const newContact = {
      id: contacts.length + 1,
      name,
      phone
    };
  
    contacts.push(newContact);
  
    return newContact;
  };
  
  const update = (id, { name, phone }) => {
    const contact = contacts.find((item) => item.id === id);
  
    if (!contact) {
      return null;
    }
  
    if (name !== undefined) {
      contact.name = name;
    }
  
    if (phone !== undefined) {
      contact.phone = phone;
    }
  
    return contact;
  };
  
  const remove = (id) => {
    const index = contacts.findIndex((item) => item.id === id);
  
    if (index === -1) {
      return false;
    }
  
    contacts.splice(index, 1);
  
    return true;
  };
  
  module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
  };