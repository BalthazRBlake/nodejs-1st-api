const { Router } = require("express");
const { AuthMiddleware } = require("../middleware");

module.exports = function({ UserController }) {
  const router = Router();

  router.get("/", [AuthMiddleware], UserController.getAll); // set middleware before running Controller
  router.get("/:userId", [AuthMiddleware], UserController.get);
  router.patch("/:userId", [AuthMiddleware], UserController.update);
  router.delete("/:userId", [AuthMiddleware], UserController.delete);

  return router;
};