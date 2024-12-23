const { Router } = require("express");

const usersController = require("../controllers/userController");

const usersRouter = Router();

usersRouter.get("/", usersController.getUsernames);

usersRouter.get("/new", usersController.createUsernameGet);

usersRouter.post("/new", usersController.createUsernamePost);

module.exports = usersRouter;
