const { Router } = require("express");

module.exports = function({ AuthController }) {
  const router = Router();

  router.post("/singUp", AuthController.singUp);
  router.post("/singIn", AuthController.singIn);

  return router;
};