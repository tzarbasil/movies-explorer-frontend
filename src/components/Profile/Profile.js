import "./Profile.css";
import { NavLink } from "react-router-dom";

export default function Profile() {
    return (
        <section className="profile">

            <div className="profile__container">
                <h1 className="profile__title">Привет, Василий!</h1>
                <form className="profile__userdata-container">

                    <div className="profile__userdata-line">
                        <label className="profile__subtitle">Имя</label>
                        <input className="profile__userdata" required minLength={2} maxLength={40} placeholder="Имя"></input>
                    </div>

                    <div className="profile__userdata-line">
                        <label className="profile__subtitle">E-mail</label>
                        <input className="profile__userdata" required minLength={2} maxLength={40} placeholder="E-mail"></input>
                    </div>

                </form>
            </div>

            <div className="profile__buttons">
                <button type="submit" className="profile__edit-button">Редактировать</button>
                <NavLink className="profile__logout-nav" to="/"><button type="button" className="profile__logout-button">Выйти из аккаунта</button></NavLink>
            </div>
        </section>
    )
}

