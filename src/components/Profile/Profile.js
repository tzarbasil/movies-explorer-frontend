import "./Profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';

import ProfilePopup from "./ProfilePopup/ProfilePopup";

import api from '../../utils/MainApi';
import { CurrentUserContext } from "../contexts/context";

import { useContext, useEffect } from 'react';

import FormValidation from '../../utils/FormValidation';


export default function Profile({ setCurrentUser }) {
    const navigate = useNavigate();

    const [modalActive, setModalActive] = useState(false)

    const { nameDirty, emailDirty, emailError, nameError,
        blurHandler, emailHandler, nameHandler, profileFormValid, setProfileFormValid } = FormValidation();

    const logOut = () => {
        localStorage.removeItem("jwt");
        setCurrentUser({})
        navigate('/');
    }
    const currentUser = useContext(CurrentUserContext)
    const [formData, setFormData] = useState({ name: '', email: '', })

    const handleUserInput = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })


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
        setModalActive(true)
    }

    useEffect(() => {
        if ((formData.name === currentUser.name) && (formData.email === currentUser.email)) {
            setProfileFormValid(false)
        }
    }, [currentUser.email, currentUser.name, profileFormValid, formData.email, formData.name])


    return (
        <section className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Привет{currentUser.name && `, ${currentUser.name}!`}</h1>
                <form className="profile__userdata-container">
                    <div className="profile__userdata-line">
                        <label className="profile__subtitle">Имя</label>
                        <input
                            defaultValue={currentUser.name}
                            onBlur={e => blurHandler(e)}
                            onChange={(e) => { handleUserInput(e); nameHandler(e) }}
                            className="profile__userdata"
                            name="name"
                            required
                            minLength={2}
                            maxLength={40}
                            placeholder="Имя"

                        ></input>
                        {(nameDirty && nameError) && <p className='register__form-input-error'>{nameError}</p>}

                    </div>
                    <div className="profile__userdata-line">
                        <label className="profile__subtitle">E-mail</label>
                        <input
                            defaultValue={currentUser.email}
                            onBlur={e => blurHandler(e)}
                            onChange={(e) => { handleUserInput(e); emailHandler(e) }}
                            className="profile__userdata"
                            name="email"
                            required
                            minLength={2}
                            maxLength={40}
                            placeholder="E-mail"

                        >

                        </input>
                        {(emailDirty && emailError) && <p className='register__form-input-error'>{emailError}</p>}

                    </div>
                </form>
            </div>
            <ProfilePopup active={modalActive} setActive={setModalActive} />
            <div className="profile__buttons">
                <button disabled={!profileFormValid} type="submit" className="profile__edit-button" onClick={updateUser}>Редактировать</button>
                <NavLink className="profile__logout-nav" to="/"><button onClick={logOut} type="button" className="profile__logout-button">Выйти из аккаунта</button></NavLink>
            </div>
        </section>


    )
}

