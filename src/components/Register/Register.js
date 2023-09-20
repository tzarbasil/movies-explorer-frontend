import logo from '../../images/logo.svg';
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <Link className="register__link" to="/">
                <img className="register__logo" src={logo} alt="Логотип проекта" />
            </Link>

            <div className="register__container">
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__field">

                    <label className="register__field-text">
                        <label className="register__field_subtitle">Имя</label>
                        <input className="register__input register__input_type_email" type="name"
                            name="about" minLength={2} maxLength={40} required placeholder='Имя' />
                        {/* <span className="register__form-input-error">Что-то пошло не так...</span> */}
                    </label>

                    <label className="register__field-text">
                        <label className="register__field_subtitle">E-Mail</label>
                        <input className="register__input register__input_type_email" type="email"
                            name="about" minLength={2} maxLength={40} required placeholder='E-mail' />
                        {/* <span className="register__form-input-error">Что-то пошло не так...</span> */}
                    </label>

                    <label className="register__field-text">
                        <label className="register__field_subtitle">Пароль</label>
                        <input className="register__input register__input_type_password" type="password"
                            name="about" minLength={2} maxLength={40} required placeholder='Пароль' />
                        {/* <span className="register__form-input-error">Что-то пошло не так...</span> */}
                    </label>
                </form>
            </div>

            <Link className="register__auth_button" to="/movies"><button type="submit" className="register__button"> Зарегистрироваться</button></Link>
            <div className="register__offer-container">
                <h2 className="register__auth_subtitle">Уже зарегистрированы?</h2>
                <Link className="register__auth_enter" to="/signin"> Войти </Link>
            </div>
        </div>
    )
}

