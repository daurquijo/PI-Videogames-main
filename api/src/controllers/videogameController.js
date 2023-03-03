const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Videogame } = require("../models/Videogame");
const { Genre } = require("../models/Genre");

const getApiVideogamesID = async (id) => {
  let apiData = (await axios.get(`${URL}/games/${id}?key=${API_KEY}`))

  let videogamesData = {
      id: apiData.data.id,
      name: apiData.data.name,
      rating: apiData.data.rating,
      description: apiData.data.description_raw,
      released: apiData.data.released,
      genres: apiData.data.genres.map((gen) => gen.name).join(", "),
      platforms: apiData.data.platforms
        .map((videogame) => videogame.platform.name)
        .join(", "),
      background_image: apiData.data.background_image,
    };
  return videogamesData;
};

// async function getDbVideogameID(id) {
//   try {
//     const result = await Videogame.findByPk(id);
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error fetching data from database");
//   }
// }

const getDbVideogameID = async (id) => {
  return await Videogame.findByPk(id, {
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = {
  getApiVideogamesID,
  getDbVideogameID,
};
