import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../images/logo.svg';
import { useLocation } from "react-router-dom"

import AccountLogo from '../../images/AccountLogo.svg';
import MenuButton from '../../images/mobile_nav.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn, movieheader }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const location = useLocation()

    useEffect(() => {
        if (isLoggedIn) {
            setIsLoggedIn(false)
        }
    }, [isLoggedIn]);

    loggedIn = false

    const [NavigationACtive, setNavigationActive] = useState(true)

    return (
        <header className={` header ${(loggedIn || location.pathname !== '/') ? 'header-black' : ''}
${(loggedIn || location.pathname === '/movies') ? 'header-movie' : ''} 
`}>            <NavLink to="/">
                <img className="header__logo" src={logo} alt="Логотип проекта" />
            </NavLink>

            <ul className={`link-container ${(loggedIn || location.pathname !== '/') && 'link-container-movies'}`}>
                <NavLink className="header__register" to="/signup"> Регистрация </NavLink>
                <NavLink className="header__login" to="/signin"> Войти  </NavLink>
            </ul>

            {(loggedIn || location.pathname !== '/') && <nav className='header__links'>
                <ul className='header__links-list'>
                    <NavLink className="header__film-link" to="/movies"> Фильмы </NavLink>
                    <NavLink className="header__film-link" to="/saved-movies"> Сохранённые фильмы  </NavLink>

                    <NavLink className="header__account-link" to="/profile">
                        Аккаунт
                        <img className="header__account" src={AccountLogo} alt="аккаунт"></img>
                    </NavLink>
                </ul>
            </nav>}

            {(loggedIn || location.pathname !== '/') && <ul className='header__navigation'>
                <button type="button" className="header__menu-button" onClick={() => setNavigationActive(true)}  >
                    <img className='button-img' src={MenuButton} alt="Меню" />
                </button>
                <Navigation active={NavigationACtive} setActive={setNavigationActive}></Navigation>
            </ul>
            }

        </header>
    )
}
