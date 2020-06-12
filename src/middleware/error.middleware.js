const { response } = require("express");

module.exports = (error, request, response, next) => {
  const httpStatus = error.status || 500;

  return response.status(httpStatus).send({
    status: httpStatus,
    message: error.message || "Internal Server Error"
  })
};