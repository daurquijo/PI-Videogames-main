import React from "react";
import style from "./searchNav.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actions/index";

const SearchVideogame = ({ setPageBooleano }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handlerInputvalue = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(getGameByName(input));
    setPageBooleano(true);
    setInput("");
  };

  return (
    <div className={style.inputContainer}>
      <input
        value={input}
        onChange={(e) => handlerInputvalue(e)}
        placeholder="Game by name"
        className={style.input}
        type="text"
      />
      <button
        onClick={(e) => handlerSubmit(e)}
        type="submit"
        className={style.btn}
      >
        Search
      </button>
    </div>
  );
};

export default SearchVideogame;