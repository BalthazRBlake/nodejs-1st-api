const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");
const app = require(".");

// service
const { HomeService } = require("../service");

// controller
const { HomeController } = require("../controller");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

// model
const { User, Idea, Comment } = require("../model");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    HomeService: asClass(HomeService).singleton(),
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  });

module.exports = container;
