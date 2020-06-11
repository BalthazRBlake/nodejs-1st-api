const { createContainer, asClass, asValue, asFunction } = require("awilix");

const { HomeService } = require("../service");

const container = createContainer();

container.register({
  HomeService: asClass(HomeService).singleton()
});

module.exports = container;