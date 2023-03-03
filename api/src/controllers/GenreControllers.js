require('dotenv').config();
const { default: axios } = require('axios');
const { Genre } = require('../db')
const { URL, API_KEY} = process.env;


const getApiGenres = async () => {
    const apiInfo = await axios.get(`${URL}/genres?key=${API_KEY}`);
    const response = await apiInfo.data.results.map((genre) => {
        return {
            id: genre.id,
            name: genre.name,

        }
    })
    return response
}

const genresDb = async () => {
    const genres = await Genre.findAll();
    if(!genres.length){
        const info = await getApiGenres()
        await Genre.bulkCreate(info)
    } else {
        return ('No se pudo copiar la info a la base de datos')
    }
}

const getGenresDb = async () => {
    const dbInfo = await genresDb()
    let totalGenres = await Genre.findAll()
    return totalGenres
}

module.exports = {
    getGenresDb
}