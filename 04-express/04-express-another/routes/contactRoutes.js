const express = require('express');

const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const validateContact = require('../middlewares/validateContact');
const validateContactUpdate = require('../middlewares/validateContactupdate');
const validateId = require('../middlewares/validateId');

const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

router.use(authMiddleware);

router.get('/', getContacts);

router.get('/:id', validateId, getContactById);

router.post('/', validateContact, createContact);

router.patch('/:id', validateContactUpdate, updateContact);

router.delete('/:id', adminMiddleware, deleteContact);

module.exports = router;