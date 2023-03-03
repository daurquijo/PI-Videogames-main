import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/card";
import style from './cardsContainers.module.css'


function CardsContainer({page}){
    
    const games = useSelector(store => store.games)
    const paginate = paginated(games, page)

    // const game = useSelector(store => store.game)
    
    if(paginate.length > 0){
        return(
            <div className={style.container}>
                {paginate.map((game) => {
                    return(
                        <Card
                        id={game.id}
                        key={game.id}
                        name={game.name}
                        background_image={game.background_image}
                        genres={game.genres}
                        platforms={game.platforms}
                        />
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className={style.container}>
            <h4>
                oops!! the option has no games, try another :)
            </h4>
            </div>
        );
    }
}


const paginated = (totalElements, page) => {
    let start = (page - 1) * 15;
    let end = start + 15;
    return totalElements.slice(start, end);
};

export default CardsContainer;