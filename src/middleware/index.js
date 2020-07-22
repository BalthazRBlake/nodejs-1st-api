// const { request } = require('express');
const NotFoundMiddleware = require('./not-found.middleware');
const ErrorMiddleware = require('./error.middleware');
const AuthMiddleware = require('./auth.middleware');
const ParseIntMiddleware = require('./parse-int.middleware');

module.exports = {
  NotFoundMiddleware,
  ErrorMiddleware,
  AuthMiddleware,
  ParseIntMiddleware,
};
