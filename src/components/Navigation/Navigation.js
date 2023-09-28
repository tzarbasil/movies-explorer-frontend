import { NavLink } from "react-router-dom";
import "./Navigation.css";
import React from "react";
import AccountLogo from '../../images/AccountLogo.svg';


const navigation = ({ active, setActive }) => {
    return (
        <div className={active ? "navigation opened" : "navigation"} onClick={() => setActive(false)}>
            <button type="button" className="navigation__button" onClick={() => setActive(false)}></button>
            <div className="navigation-content" onClick={e => e.stopPropagation()}>
                <NavLink className="navigation__link" onClick={() => setActive(false)} to="/"> Главная </NavLink>
                <NavLink className="navigation__link" onClick={() => setActive(false)} to="/movies"> Фильмы </NavLink>
                <NavLink className="navigation__link" onClick={() => setActive(false)} to="/saved-movies"> Сохранённые фильмы  </NavLink>
                <NavLink className="navigation__account-link" onClick={() => setActive(false)} to="/profile">
                    Аккаунт 
                    <img className="navigation__account-logo" src={AccountLogo} alt="Аккаунт">
                    </img> </NavLink>
            </div>
        </div >
    )
}

export default navigation