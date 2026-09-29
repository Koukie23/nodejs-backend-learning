const contactRepository = require('../repositories/contactRepositories');

const getAllContacts = ({ name, limit }) => {
  let result = contactRepository.findAll();

  if (name) {
    result = result.filter((item) => item.name === name);
  }

  if (limit) {
    result = result.slice(0, limit);
  }

  return result;
};

const getContactById = (id) => {
  return contactRepository.findById(id);
};

const createContact = ({ name, phone }) => {
  return contactRepository.create({
    name,
    phone
  });
};

const updateContact = (id, { name, phone }) => {
  return contactRepository.update(id, {
    name,
    phone
  });
};

const deleteContact = (id) => {
  return contactRepository.remove(id);
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};