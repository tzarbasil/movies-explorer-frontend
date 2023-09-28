import logo from '../../images/logo.svg';
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import FormValidation from '../../utils/FormValidation';

import auth from '../../utils/Authorization';

export default function Register() {
    const { nameDirty, emailDirty, passwordDirty, emailError, passwordError, nameError,
         blurHandler, emailHandler, nameHandler, passwordHandler, formValid } = FormValidation();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const handleUserInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrorMessage('')
    }
    const [errorMessage, setErrorMessage] = useState('')


    const register = () => {
        auth.register(formData.name, formData.email, formData.password).catch(err => {
            switch (err.status) {
                case 401:
                    setErrorMessage('Неверный логин или пароль'); break;
                case 500:
                    setErrorMessage('Ошибка сервера'); break;
                default:
                    setErrorMessage(err.message); break;
            }
            navigate('/signin')
        })
    }


    return (
        <div className="register">
            <Link className="register__link" to="/">
                <img className="register__logo" src={logo} alt="Логотип проекта" />
            </Link>

            <div className="register__container">
                <h1 className="register__title">Добро пожаловать!</h1>
                {/* {JSON.stringify(formData)} */}
                <form className="register__field">

                    <label className="register__field-text">
                        <label className="register__field-subtitle">Имя</label>
                        <input
                            onBlur={e => blurHandler(e)}
                            className="register__input register__input_type_email" type="name"
                            name="name"
                            // onChange={handleUserInput}
                            // onChange={e => nameHandler(e)}
                            onChange={(e) => { handleUserInput(e); nameHandler(e) }}
                            minLength={2} maxLength={40} required placeholder='Имя' />
                        {(nameDirty && nameError) && <p className='register__form-input-error'>{nameError}</p>}
                    </label>

                    {/* {errorMessage && <p className='register__form-input-error'>{errorMessage}</p>} */}

                    <label className="register__field-text">
                        <label className="register__field-subtitle">E-Mail</label>
                        <input
                            onChange={(e) => { handleUserInput(e); emailHandler(e) }}
                            onBlur={e => blurHandler(e)}
                            className="register__input register__input_type_email" type="email"
                            name="email"
                            minLength={2} maxLength={40} required placeholder='E-mail' />
                        {(emailDirty && emailError) && <p className='register__form-input-error'>{emailError}</p>}
                    </label>

                    <label className="register__field-text">
                        <label className="register__field-subtitle">Пароль</label>
                        <input
                            className="register__input register__input_type_password" type="password"
                            name="password"
                            onChange={(e) => { handleUserInput(e); passwordHandler(e) }}
                            onBlur={e => blurHandler(e)}
                            minLength={2} maxLength={40} required placeholder='Пароль' />
                        {(passwordDirty && passwordError) && <p className='register__form-input-error'>{passwordError}</p>}
                    </label>
                </form>
            </div>

            <Link className="register__auth-button" >
                <button disabled={!formValid} type="submit" className="register__button" onClick={register}> 
                Зарегистрироваться</button></Link>
            <div className="register__offer-container">
                <h2 className="register__auth-subtitle">Уже зарегистрированы?</h2>
                <Link className="register__auth-enter" to="/signin"> Войти </Link>
            </div>
        </div>
    )
}

