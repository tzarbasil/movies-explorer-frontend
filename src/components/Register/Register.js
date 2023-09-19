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
                <h2 className="register__title">Добро пожаловать!</h2>
                <div className="register__field">

                    <label className="register__field-text">
                        <p className="register__field_subtitle">Имя</p>
                        <input className="register__input register__input_type_name" name="name" type="text"
                            minLength={2} maxLength={40} required placeholder='Имя'/>
                        {/* <span className="register__form-input-error">Что-то пошло не так...</span> */}
                    </label>

                    <label className="register__field-text">
                        <p className="register__field_subtitle">E-Mail</p>
                        <input className="register__input register__input_type_email" type="email"
                            name="about" minLength={2} maxLength={40} required placeholder='E-Mail'/>
                        {/* <span className="register__form-input-error">Что-то пошло не так...</span> */}
                    </label>

                    <label className="register__field-text">
                        <p className="register__field_subtitle">Пароль</p>
                        <input className="register__input register__input_type_password" type="password"
                            name="about" minLength={2} maxLength={40} required placeholder='Пароль'/>
                        <span className="register__form-input-error">Что-то пошло не так...</span>
                    </label>
                </div>
            </div>

            <Link className="login__auth_enter" to="/movies"><button className="register__button"> Зарегестрироваться</button></Link>
            <div className="register__offer-container">
                <h2 className="register__auth_subtitle">Уже зарегистрированы?</h2>
                <Link className="register__auth_enter" to="/signin"> Войти </Link>
            </div>
        </div >
    )
}

