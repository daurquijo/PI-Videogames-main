const { getPlatformsApi} = require('../controllers/PlatformsControllers')

const getAllPlatforms = async (req, res) => {
    try {
        const response = await getPlatformsApi()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getAllPlatforms
}