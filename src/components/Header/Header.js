import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../images/logo.svg';

import AccountLogoGray from '../../images/accountGray.svg';
import MenuButton from '../../images/mobile_nav.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn }) {
    const [NavigationACtive, setNavigationActive] = useState(true)

    return (
        <>
            {!loggedIn ? (
                <header className="header">
                    <NavLink to="/">
                        <img className="header__logo" src={logo} alt="Логотип проекта" />
                    </NavLink>

                    <div className="link__container">
                        <NavLink className="header__register" to="/signup"> Регистрация </NavLink>
                        <NavLink className="header__login" to="/signin"> Войти  </NavLink>
                    </div>
                </header>

            ) : (
                <header className="header header__black">
                    <NavLink to="/">
                        <img className="header__logo" src={logo} alt="Логотип проекта" />
                    </NavLink>

                    <div className='header__film-links'>
                        <NavLink className="header__film-link" to="/movies"> Фильмы </NavLink>
                        <NavLink className="header__film-link" to="/saved-movies"> Сохранённые фильмы  </NavLink>
                    </div>

                    <div className='header__another-links'>
                        <NavLink className="header__account-link" to="/profile"> <img className="header__account" src={AccountLogoGray} alt="аккаунт"></img> </NavLink>
                        <button className="header__menu-button" onClick={() => setNavigationActive(true)}  >
                            <img src={MenuButton} alt="Меню" />
                        </button> 
                        <Navigation active={NavigationACtive} setActive={setNavigationActive}></Navigation>
                    </div>
                </header>
            )}
        </>
    )
}

