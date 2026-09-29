const validateContactUpdate = (req, res, next) => {
  const { name, phone } = req.body;

  if (name !== undefined && typeof name !== 'string') {
    return res.status(400).json({
      message: 'Name must be a string'
    });
  }

  if (phone !== undefined && !/^\d{11}$/.test(phone)) {
    return res.status(400).json({
      message: 'Phone must contain 11 digits'
    });
  }

  next();
};

module.exports = validateContactUpdate;