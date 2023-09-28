import "./Profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';

import api from '../../utils/MainApi';
import { CurrentUserContext } from "../contexts/context";

import { useContext } from 'react';


export default function Profile({ setCurrentUser }) {
    const navigate = useNavigate();


    const logOut = () => {
        localStorage.removeItem("jwt");
        setCurrentUser({})
        // setLoggedIn(false);
        navigate('/');
    }
    const currentUser = useContext(CurrentUserContext)
    // patchUserInfo
    const [formData, setFormData] = useState({ name: '', email: '', })
    const handleUserInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrorMessage('')
    }
    const [errorMessage, setErrorMessage] = useState('')


    const updateUser = () => {
        api.patchUserInfo(formData.name, formData.email).then(user => {
            setCurrentUser(user)
        }).catch(err => {
            switch (err.status) {
                case 401:
                    setErrorMessage('Неверный логин или пароль'); break;
                case 500:
                    setErrorMessage('Ошибка сервера'); break;
                default:
                    setErrorMessage(err.message); break;
            }
        })
    }


    return (
        <section className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет{currentUser.name && `, ${currentUser.name}!`}</h1>
                <form className="profile__userdata-container">
                    <div className="profile__userdata-line">
                        <label className="profile__subtitle">Имя</label>
                        <input className="profile__userdata" name="name" onChange={handleUserInput} required minLength={2} maxLength={40} placeholder="Имя"></input>
                    </div>
                    {errorMessage && <p className='login__form-input-error'>{errorMessage}</p>}
                    <div className="profile__userdata-line">
                        <label className="profile__subtitle">E-mail</label>
                        <input className="profile__userdata" name="email" onChange={handleUserInput} required minLength={2} maxLength={40} placeholder="E-mail"></input>
                    </div>
                    {errorMessage && <p className='login__form-input-error'>{errorMessage}</p>}
                </form>
            </div>

            <div className="profile__buttons">
                <button type="submit" className="profile__edit-button" onClick={updateUser}>Редактировать</button>
                <NavLink className="profile__logout-nav" to="/"><button onClick={logOut} type="button" className="profile__logout-button">Выйти из аккаунта</button></NavLink>
            </div>
        </section>
    )
}

