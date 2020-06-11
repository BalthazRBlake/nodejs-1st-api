const { createContainer, asClass, asValue, asFunction } = require("awilix");

// service
const { HomeService } = require("../service");

// controller
const { HomeController } = require("../controller");

const container = createContainer();

container
  .register({
    HomeService: asClass(HomeService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  });

module.exports = container;
