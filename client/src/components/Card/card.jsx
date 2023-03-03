import React from "react";
import style from'./card.module.css'
import { NavLink } from 'react-router-dom'


function Card({ id, background_image, name, genres, rating }) {
    


    return(
    <div className={style.cardContainer}>
        <img className={style.cardImg} src={background_image} alt={name} />
        <h3 className={style.cardTitle}>{name}</h3>
        <div>
        <h4 className={style.cardInf}>
            Genres:
            <span className={style.cardSpan}>{genres}</span>
        </h4>
        </div>
        <NavLink to={`/videogame/${id}`} className={style.detailLink}>
            More Details
        </NavLink>
    </div>
    ) 
};

export default Card;

