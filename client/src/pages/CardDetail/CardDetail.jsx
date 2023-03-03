import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getGameById, getGames } from "../../redux/actions";
import style from './cardDetail.module.css'


const CardDetail = () => {
    const dispatch = useDispatch();
    const idGame = useParams();
    let id = idGame.id;

    useEffect(() => {
        dispatch(getGameById(id));
    },[dispatch, id]);

    const game = useSelector((state) => state.game)

    return(
        <div className={style.detailContainers}>  
            <img className={style.cardImage} src={game.background_image} alt="" />
            <div className={style.detailText}>
                <h3 className={style.cardTitles}>{game.name}</h3>
                <h4 className={style.cardInfo}>Description:
                <span className={style.cardSpan}>{game.description}</span>
                </h4>
                <h4 className={style.cardInfo}>Released:
                <span className={style.cardSpan}>{game.released}</span>
                </h4>
                <h4 className={style.cardInfo}>Genres:
                <span className={style.cardSpan}>{game.genres}</span>
                </h4>
                <h4 className={style.cardInfo}>Platforms:
                <span className={style.cardSpan}>{game.platforms}</span>
                </h4>
                <h4 className={style.cardInfo}>Rating:
                <span className={style.cardSpan}>{game.rating}</span>
                </h4>
            </div>
            <NavLink className={style.boton} to='/home'>Go Back</NavLink>
        </div>
    )

}

export default CardDetail;