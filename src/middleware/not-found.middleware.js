const { response } = require("express");

module.exports = (request, response, next) => 
  response.status(404).send({ status: 404, message: "Resource not found" });