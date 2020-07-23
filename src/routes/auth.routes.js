const { Router } = require('express');

module.exports = function ({ AuthController }) {
  const router = Router();

  router.post('/signUp', AuthController.singUp);
  router.post('/signIn', AuthController.singIn);

  return router;
};
