const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");
const app = require(".");

// service
const 
{ 
  HomeService,
  UserService,
  IdeaService,
  CommentService 
} = require("../service");

// controller
const 
{ 
  HomeController,
  UserController,
  IdeaController,
  CommentController
} = require("../controller");

// routes
const 
{ 
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

// model
const { User, Idea, Comment } = require("../model");

// repository
const 
{ 
  UserRepository, 
  IdeaRepository, 
  CommentRepository 
} = require("../repository");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),

    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),

    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),

    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),

    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
    
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  });

module.exports = container;
