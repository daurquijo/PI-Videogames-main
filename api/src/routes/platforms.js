const { Router } = require("express");

const { getAllPlatforms } = require("../handlers/PlatformsHandler");

const platformsRouter = Router();

platformsRouter.get("/", getAllPlatforms);

module.exports = platformsRouter;