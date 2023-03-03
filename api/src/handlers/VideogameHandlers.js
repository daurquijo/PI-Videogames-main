const { getVideogameByName, getVideogameById } = require('../controllers/VideogamesControllers')
const { Videogame } = require('../db')
const { getAllVideogames } = require('../controllers/VideogamesControllers')

const getVideogames = async (req, res) => {
    const { name } = req.query
    try {
        if(name){
            const response = await getVideogameByName(name)
            res.status(200).send(response)
        } else {
            const response = await getAllVideogames()
            res.status(200).send(response)
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getVideogamesById = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getVideogameById(id)
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

    
}

const postVideogame = async (req, res) => {
    const { name, image, rating, description, released, platforms } = req.body;

    try {
        const createGame = await Videogame.create(req.body);
        res.status(200).send(createGame);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


module.exports = {
    postVideogame,
    getVideogamesById,
    getVideogames
}