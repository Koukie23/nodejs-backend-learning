const authMiddleware = (req, res, next) => {
  const authorization = req.get('Authorization');

  if (!authorization) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }

  if (authorization === `Bearer ${process.env.USER_TOKEN}`) {
    req.user = {
      id: 1,
      role: 'user'
    };

    return next();
  }

  if (authorization === `Bearer ${process.env.ADMIN_TOKEN}`) {
    req.user = {
      id: 2,
      role: 'admin'
    };

    return next();
  }

  return res.status(401).json({
    message: 'Invalid token'
  });
};

module.exports = authMiddleware;