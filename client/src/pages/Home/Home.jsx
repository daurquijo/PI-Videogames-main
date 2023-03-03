import React from "react";
import { NavLink } from "react-router-dom";
import { getGames, orderAlfabetic, orderRating, filterByGenre, getGenres, cleaned } from '../../redux/actions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from "../../components/CardContainer/CardsContainer";
import style from './home.module.css'
import SearchVideogame from "../../components/searchNav/searchNav";
import Pagination from "../../components/pagination/pagination";
import CreateVideogame from "../../components/form/createVideogame";



const Home = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [pageBooleano, setPageBooleano] = useState(false);
    const [order, setOrder] = useState("");
    const [order2, setOrder2] = useState("");
    const allGenres = useSelector((state) => state.genres);
    
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);



    useEffect(() => {
        dispatch(getGames());
        dispatch(getGenres());
        setPageBooleano(false);
        dispatch(cleaned());
    }, ([dispatch]))

    const handlerFilterGenre = (e) => {
        setPage(1);
        if (e.target.value) dispatch(filterByGenre(e.target.value));
    };

    const handlerOrderByAlfabetic = (e) => {
        e.preventDefault();
        setPage(1);
        if (e.target.value) dispatch(orderAlfabetic(e.target.value));
        setOrder(e.target.value);
    };
    
    const handlerOrderByRating = (e) => {
        e.preventDefault();
        setPage(1);
        if (e.target.value) dispatch(orderRating(e.target.value));
        setOrder2(e.target.value);
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(getGames());
    };

    if(isVisibleModal === false){
    return(
        <div className={style.generalContainer}>
            <div className={style.bannerContainer}>
                <h1 className={style.landingTitle}>GAMING WORLD</h1>
                <div className={style.filtersContainer}>
                <NavLink className={style.buttonHome} to='/'>Back</NavLink>
                <NavLink className={style.buttonHome} to='/home' onClick={(e) => handlerSubmit(e)}>HOME</NavLink>
                <button onClick={openModal} className={style.boton}>Create Videogame</button>
                </div>
                <div className={style.filtersContainer}>
                <SearchVideogame setPageBooleano={setPageBooleano}/>
                <div className={style.selectContainer}>
                <label htmlFor="order">A-Z/Z-A</label>
                <select
                onChange={(e) => handlerOrderByAlfabetic(e)}
                className={style.select}
                name="order"
                id="order"
                >
                <option></option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
                </select>
            </div>
            <div className={style.selectContainer}>
                <label htmlFor="order">Order-Rating</label>
                <select
                onChange={(e) => handlerOrderByRating(e)}
                className={style.select}
                name="order"
                id="order"
                >
                <option></option>
                <option value="0-5">0-5</option>
                <option value="5-0">5-0</option>
                </select>
            </div>
            <div className={style.selectContainer}>
                <label htmlFor="order">Filter-Genre</label>
                <select
                onChange={(e) => handlerFilterGenre(e)}
                className={style.select}
                name="order"
                id="order"
                >
                <option></option>
                {allGenres?.map((el) => {
                    return (
                        <option key={el.id} value={el.name}>
                            {el.name}
                        </option>
                    );
                })}
                </select>
            </div>
                </div>
                    {pageBooleano === false ? (
                    <Pagination page={page} setPage={setPage} />
                    ) : null}
                    <CardsContainer page={page} />
            </div>
        </div>
    )
} else {
    return <CreateVideogame func={closeModal} />;
}
}

export default Home

