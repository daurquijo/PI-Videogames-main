import React from "react";
import style from "./pagination.module.css";
import { useSelector } from "react-redux";

const Pagination = ({ page, setPage, paginado}) => {
    const allVideogames = useSelector((state) => state.games);

let maxPage = Math.ceil(allVideogames.length / 15);

const handlerNext = () => {
    setPage(page + 1);
};

const handlerPreview = () => {
    if (page > 1) setPage(page - 1);
};

    return (
    <div className={style.paginationContainer}>
        <button
        onClick={() => { handlerPreview()}}
        className={page > 1 ? style.pageBtn : style.none}
        >
        Preview
        </button>
        <p className={style.pageNumber}>{page}</p>
        <button
        onClick={() => { handlerNext()}}
        className={page < maxPage ? style.pageBtn : style.none}
        >
        Next
        </button>
    </div>
    );
};

export default Pagination;
