const { Router } = require('express')
const { getVideogames,  postVideogame, getVideogamesById } = require('../handlers/VideogameHandlers')

const videogameRouter = Router();

videogameRouter.get('/', getVideogames)

videogameRouter.get('/:id', getVideogamesById)

videogameRouter.post('/', postVideogame)


module.exports = videogameRouter

