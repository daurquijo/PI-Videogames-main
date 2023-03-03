require('dotenv').config();
const { default: axios } = require('axios');
const { Genre } = require('../db')
const { URL, API_KEY} = process.env;


const getPlatformsApi = async () => {
    let apiVideogames = [];
    let apiData = (await axios.get(`${URL}/platforms?key=${API_KEY}`)).data.results;
    apiVideogames = apiVideogames.concat(apiData);
    let videogamesData = apiVideogames.map((platform) => platform.name)

    return videogamesData;
}



module.exports = {
    getPlatformsApi
}