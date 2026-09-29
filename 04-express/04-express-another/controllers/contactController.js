const contactService = require('../services/contactService');

const getContacts = (req, res) => {
  const name = req.query.name;
  const limit = Number(req.query.limit);

  const contacts = contactService.getAllContacts({
    name,
    limit
  });

  res.status(200).json(contacts);
};

const getContactById = (req, res, next) => {
  const id = Number(req.params.id);

  const contact = contactService.getContactById(id);

  if (!contact) {
    const err = new Error('Contact not found');
    err.status = 404;

    return next(err);
  }

  res.status(200).json(contact);
};

const createContact = (req, res) => {
  const { name, phone } = req.body;

  const newContact = contactService.createContact({
    name,
    phone
  });

  res.status(201).json(newContact);
};

const updateContact = (req, res, next) => {
  const id = Number(req.params.id);

  const { name, phone } = req.body;

  const contact = contactService.updateContact(id, {
    name,
    phone
  });

  if (!contact) {
    const err = new Error('Contact not found');
    err.status = 404;

    return next(err);
  }

  res.status(200).json(contact);
};

const deleteContact = (req, res, next) => {
  const id = Number(req.params.id);

  const deleted = contactService.deleteContact(id);

  if (!deleted) {
    const err = new Error('Contact not found');
    err.status = 404;

    return next(err);
  }

  res.status(204).end();
};

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};