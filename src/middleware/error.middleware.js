// const { response } = require('express');
// eslint-disable-next-line no-unused-vars
module.exports = (error, request, response, next) => {
  const httpStatus = error.status || 500;

  return response.status(httpStatus).send({
    status: httpStatus,
    message: error.message || 'Internal Server Error',
  });
};
