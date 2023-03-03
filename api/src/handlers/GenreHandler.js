const { getGenresDb } = require('../controllers/GenreControllers')

const getAllGenres = async (req, res) => {
    try {
        const response = await getGenresDb()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getAllGenres
}