/* eslint-disable implicit-arrow-linebreak */
// const { response } = require('express');
// eslint-disable-next-line no-unused-vars
module.exports = (request, response, next) =>
  response.status(404).send({
    status: 404,
    message: 'Resource not found',
  });
