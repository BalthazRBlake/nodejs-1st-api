const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    const error = new Error();
    error.status = 400;
    error.message = 'Token must be provided';
    throw error;
  }

  jwt.verify(token, JWT_SECRET, (tokenError, decodedToken) => {
    if (tokenError) {
      const error = new Error();
      error.status = 401;
      error.message = 'Invalid token';
      throw error;
    }

    request.user = decodedToken.user;
    next();
  });
};
