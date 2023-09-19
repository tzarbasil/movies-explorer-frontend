import { NavLink } from "react-router-dom";
import "./Navigation.css";
import React from "react";
import AccountLogoGray from '../../images/accountGray.svg';


const navigation = ({ active, setActive }) => {
    return (

        <div className={active ? "navigation active" : "navigation"} onClick={() => setActive(false)}>
            <button className="navigation__button" onClick={() => setActive(false)}></button>
            <div className="navigation__content" onClick={e => e.stopPropagation()}>
                <NavLink className="navigation__link" onClick={() => setActive(false)} to="/"> Главная </NavLink>
                <NavLink className="navigation__link" onClick={() => setActive(false)} to="/movies"> Фильмы </NavLink>
                <NavLink className="navigation__link" onClick={() => setActive(false)} to="/saved-movies"> Сохранённые фильмы  </NavLink>
                <NavLink className="navigation__account-link" onClick={() => setActive(false)} to="/profile"> <img src={AccountLogoGray} alt="Аккаунт"></img>  </NavLink>
            </div>
        </div >
    )
}

export default navigation