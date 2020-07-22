/* eslint-disable implicit-arrow-linebreak */
const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports.generateToken = (user) =>
  sign({ user }, JWT_SECRET, { expiresIn: '4h' });
