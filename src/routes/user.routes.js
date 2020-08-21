const { Router } = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require('../middleware');
const { CACHE_TIME } = require('../helper');

module.exports = function ({ UserController }) {
  const router = Router();
  router.get(
    '/',
    [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    UserController.getAll,
  ); // set middleware before running Controller
  router.get('/:userId', [AuthMiddleware], UserController.get);
  router.patch('/:userId', [AuthMiddleware], UserController.update);
  router.delete('/:userId', [AuthMiddleware], UserController.delete);

  return router;
};
