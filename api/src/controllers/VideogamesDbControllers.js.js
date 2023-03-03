const { Videogame, Genre } = require('../db')


const getDbVideogames = async () => {
    return await Videogame.findAll({
        include: [
            {
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: []
                }

            }
        ]
    })
}



const createVideogame =  (name, description, released, background_image, rating, createInDb, genres, platforms) => {
    
    let videogameCreate = Videogame.create({
        name, description, released, background_image, rating, createInDb, genres, platforms
    })
    return videogameCreate;
}
module.exports = {
    createVideogame,
    getDbVideogames
}