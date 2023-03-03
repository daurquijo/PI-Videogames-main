import React from "react";
import style from "./createVideogame.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validation } from "./validations";
import { getGames, getGenres, getPlatforms, postVideogames } from "../../redux/actions";

const CreateVideogame = ({ func }) => {
    const dispatch = useDispatch();


    const allGenres = useSelector((state) => state.genres);


    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        description: "",
        released: "",
        background_image: "",
        rating: "",
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms())
    }, [dispatch]);


    const handlerInputvalue = (e) => {
        setInput({ 
            ...input,
            [e.target.name]: e.target.value });
        setErrors(
            validation({
            ...input,
            [e.target.name]: e.target.value,
        })
    );
    };

    const handlerselectvalue = (e) => {
        if (input[e.target.name].includes(e.target.value) === false) {
            setInput({
                ...input,
                [e.target.name]: [...input[e.target.name], e.target.value],
            });
        } else {
            return alert("OPPS! :( you can not repeat the same choice");
        }
            setErrors(
                validation({
                    ...input,
                    [e.target.name]: e.target.value,
                })
            );
        };
    
    
    const deleteOptionGenres = (e, element) => {
        e.preventDefault();
        const newGenres = input.genres.filter((el) => el !== element);
        setInput({
            ...input,
            genres: newGenres,
        });
        setErrors(
            validation({
                ...input,
                genres: newGenres,
            })
        );
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(postVideogames(input));
        setInput({
            name: "",
            description: "",
            released: "",
            background_image: "",
            rating: "",
            genres: [],
            platforms: [],
        });
        func()
        
        dispatch(getGames())
    };

    return (
        <form
        onSubmit={(e) => {
            handlerSubmit(e);
        }}
        className={style.generalContainer}
        >
            <div className={style.bannerContainer}>
                
                <div className={style.formContainer}>
                    <h3>Create new Videogame</h3>
                    <div className={style.inputContainer}>
                    <label htmlFor="name">Name: </label>
                    <input
                    placeholder="Game`s name"
                    onChange={(e) => handlerInputvalue(e)}
                    value={input.name}
                    type="text"
                    name="name"
                    id="name"
                    />
                </div>
                {errors.name && <p className={style.danger}>{errors.name}</p>}
                <div className={style.inputContainer}>
                    <label htmlFor="released">Realeased Date: </label>
                    <input
                    name="released"
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => handlerInputvalue(e)}
                    value={input.released}
                    type="text"
                    />
                </div>
                {errors.released && <p className={style.danger}>{errors.released}</p>}
                <div className={style.inputContainer}>
                    <label htmlFor="rating">Rating: </label>
                    <input
                    name="rating"
                    placeholder='4'
                    onChange={(e) => handlerInputvalue(e)}
                    value={input.rating}
                    type="number"
                    />
                </div>
                {errors.rating && <p className={style.danger}>{errors.rating}</p>}
                <div className={style.inputContainer}>
                    <label htmlFor="background_image">Image-URL </label>
                    <input
                    placeholder="https://imagesParaJuegos.com/images"
                    name="background_image"
                    onChange={(e) => handlerInputvalue(e)}
                    value={input.background_image}
                    type="text"
                    />
                </div>
                {errors.background_image && <p className={style.danger}>{errors.background_image}</p>}
                <div className={style.inputContainer}>
                    <label htmlFor="description">Description: </label>
                    <textarea
                    name="description"
                    maxLength="100"
                    placeholder="This game is characterized by"
                    onChange={(e) => handlerInputvalue(e)}
                    value={input.description}
                    type="text"
                    />
                </div>
                {errors.description && <p className={style.danger}>{errors.description}</p>}
                <div className={style.selectsContainer}>
                    <div className={style.selectContainer}>
                        <label htmlFor="genres">Genres</label>
                        <select
                        onChange={(e) => handlerselectvalue(e)}
                        className={style.select}
                        name="genres"
                        id="genres"
                        value={input.genres}
                        >
                        {allGenres?.map((el) => {
                        return (
                            <option key={el.id} value={el.name}>
                                {el.name}
                            </option>
                        );
                        })}
                        </select>
                    <div>
                    {input.genres?.map((element, i) => {
                        return (
                        <div key={i} className={style.optionSelectContainer}>
                            <p>{element}</p>
                            <button onClick={(e) => deleteOptionGenres(e, element)}>
                                X
                            </button>
                        </div>
                        );
                    })}
                    </div>
                    </div>
                {errors.genres && <p className={style.danger}>{errors.genres}</p>}
                </div>
    
                <div className={style.btnContainer}>
                    <button className={input.name === "" || Object.entries(errors).length !== 0 ? style.none : style.btnSubmit} type="submit">
                    Create
                    </button>
                    <NavLink
                    className={style.btnCancel}
                    onClick={func}
                    to="/home"
                    >
                    Cancel
                    </NavLink>
                </div>
            </div>
        </div>
    </form>
        
    );
    
}

export default CreateVideogame;