const { Router } = require("express");

const appRouter = Router();

const membersController = require("../controllers/membersController");

const {validateUserCreation}=require("../validators/signupformvalidation")

appRouter.get("/", membersController.homePageNotLogged);
appRouter.post("/", membersController.AuthenticateUser);

appRouter.get("/new", membersController.newMessage);

appRouter.post("/new", membersController.AuthorizedNewMessageSave);

// appRouter.post("authorized",membersController.AuthenticateUser);
appRouter.get("/authorized", membersController.userAuthorized);
// appRouter.post("/authorized:id", membersController.DeleteMessage);

// Create User Signup form with Form validation and sanitization (validateUserCreation)
appRouter.post("/accountcreated", validateUserCreation,membersController.NewUserCreate);

appRouter.post("/messagedeleted:id", membersController.DeleteMessage);

appRouter.get("/notauthorized", membersController.userNotAuthorized);

module.exports = appRouter;
