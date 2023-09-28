import logo from '../../images/logo.svg';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import FormValidation from '../../utils/FormValidation';

import auth from '../../utils/Authorization';
import api from '../../utils/MainApi';

export default function Login({ loggedIn }) {
    const { emailDirty, passwordDirty, emailError, passwordError,
        blurHandler, emailHandler, passwordHandler, loginFormValid } = FormValidation();


    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '' })
    const handleUserInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrorMessage('')
    }
    const [errorMessage, setErrorMessage] = useState('')

    const logIn = () => {
        auth.login(formData.email, formData.password).then((res) => {
            if (res.token) localStorage.setItem('jwt', res.token)
            
            api.updateJWTToken()
            navigate('/movies')
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

    useEffect(() => {
        if (loggedIn) navigate('/movies');
    }, [loggedIn]);

    return (
        <div className="login">
            <Link className="login__link" to="/">
                <img className="login__logo" src={logo} alt="Логотип проекта" />
            </Link>

            <div className="login__container">
                <h1 className="login__title">Рады видеть!</h1>

                <form className="login__field">

                    <label className="login__field-text">
                        <label className="login__field-subtitle">E-Mail</label>
                        <input className="login__input login__input_type_email" type="email"
                            name="email"
                            onChange={(e) => { handleUserInput(e); emailHandler(e) }}
                            onBlur={e => blurHandler(e)}
                            minLength={2} maxLength={40} required placeholder='Логин' />
                        {(emailDirty && emailError) && <p className='login__form-input-error'>{emailError}</p>}
                    </label>

                    <label className="login__field-text">
                        <label className="login__field-subtitle">Пароль</label>
                        <input className="login__input login__input_type_password" type="password"
                            name="password"
                            onChange={(e) => { handleUserInput(e); passwordHandler(e) }}
                            onBlur={e => blurHandler(e)}
                            minLength={2} maxLength={40} required placeholder='Пароль' />
                        {(passwordDirty && passwordError) && <p className='login__form-input-error'>{passwordError}</p>}
                    </label>
                    {errorMessage && <p className='login__form-input-error'>{errorMessage}</p>}
                </form>
            </div>

            {/* <Link className="login__auth-button" to="/movies"><button type="submit" className="login__button"> Войти</button></Link> */}
            <button
                disabled={!loginFormValid}
                type="submit" className="login__button" onClick={logIn}>
                Войти
            </button>
            <div className="login__offer-container">
                <h2 className="login__auth-subtitle">Ещё не зарегистрированы?</h2>
                <Link className="login__auth-enter" to="/signup"> Регистрация </Link>
            </div>
        </div>
    )
}

