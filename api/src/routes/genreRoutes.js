const { Router } = require("express");

const { getAllGenres } = require("../handlers/GenreHandler");

const genreRouter = Router();

genreRouter.get("/", getAllGenres);

module.exports = genreRouter;
