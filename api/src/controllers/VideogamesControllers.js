const axios = require("axios");
require('dotenv').config();
const { URL, API_KEY} = process.env;
const { getDbVideogames } = require('./VideogamesDbControllers.js')
const { getApiVideogamesID, getDbVideogameID } = require('./videogameController')

const getApiVideogames = async () => {
  let apiVideogames = [];
  for (let i = 1; i <= 5; i++) {
    let apiData = (await axios.get(`${URL}/games?key=${API_KEY}&page=${i}`)).data.results;
    apiVideogames = apiVideogames.concat(apiData);
  }
  let videogamesData = apiVideogames.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      rating: videogame.rating,
      description: videogame.description,
      released: videogame.released,
      genres: videogame.genres.map((gen) => gen.name).join(' - '),
      platforms: videogame.platforms.map((videogame) => videogame.platform.name).join(' - '),
      background_image: videogame.background_image,
    };
  });
  return videogamesData;
};

const getAllVideogames = async () => {
  const apiData = await getApiVideogames()
  const DbData = await getDbVideogames()
  const response = [...apiData, ...DbData]
  return response
}

const getVideogameByName = async (name) => {
  const apiInfo = await getAllVideogames();
  const filteredVideogames = apiInfo.filter(
    (videogame) => videogame.name.toLowerCase().includes(name.toLowerCase())
  );
  return filteredVideogames;
};


// const getVideogameById = async (id) => {
//   const api = await getApiVideogamesID(id)
//   if(api){
//     return api;
//   } else {
//     const Db = await getDbVideogameID(id)
//     return Db;
//   }
// };
const getVideogameById = async (idGame) => {
  const regEx = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  const regExTest = regEx.test(idGame);
  if (regExTest) {
    const result = await getDbVideogameID(idGame);
    return result;
  } else {
    const result = await getApiVideogamesID(idGame);
    return result;
  }
};


module.exports = {
  getVideogameById,
  getVideogameByName,
  getApiVideogames,
  getAllVideogames
};




// const getVideogameById = async (id) => {
//   const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
//   const testId = regexExp.test(id)
//   if(testId){
//     const Db = await getDbVideogameID(id)
//     return Db;
//   } else {
//     const api = await getApiVideogamesID(id)
//     return api;
//   }
// };