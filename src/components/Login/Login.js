import logo from '../../images/logo.svg';
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="login">
            <Link className="login__link" to="/">
                <img className="login__logo" src={logo} alt="Логотип проекта" />
            </Link>

            <div className="login__container">
                <h1 className="login__title">Рады видеть!</h1>
                <form className="login__field">

                    <label className="login__field-text">
                        <label className="login__field_subtitle">E-Mail</label>
                        <input className="login__input login__input_type_email" type="email"
                            name="about" minLength={2} maxLength={40} required placeholder='Логин' />
                        {/* <span className="login__form-input-error">Что-то пошло не так...</span> */}
                    </label>

                    <label className="login__field-text">
                        <label className="login__field_subtitle">Пароль</label>
                        <input className="login__input login__input_type_password" type="password"
                            name="about" minLength={2} maxLength={40} required placeholder='Пароль'/>
                        {/* <span className="login__form-input-error">Что-то пошло не так...</span> */}
                    </label>
                </form>
            </div>

            <Link className="login__auth_button" to="/movies"><button type="submit" className="login__button"> Войти</button></Link>
            <div className="login__offer-container">
                <h2 className="login__auth_subtitle">Ещё не зарегистрированы?</h2>
                <Link className="login__auth_enter" to="/signup"> Регистрация </Link>
            </div>
        </div>
    )
}

