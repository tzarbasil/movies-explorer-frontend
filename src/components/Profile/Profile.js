import "./Profile.css";

export default function Movies() {
    return (
        <div className="profile">

            <div className="profile__container">
                <h2 className="profile__title">Привет, Василий!</h2>
                <div className="profile__userdata-container">

                    <div className="profile__userdata-line">
                        <p className="profile__subtitle">Имя</p>
                        <p className="profile__userdata">Василий</p>
                    </div>

                    <div className="profile__userdata-line">
                        <p className="profile__subtitle">E-mail</p>
                        <p className="profile__userdata">atreides03@mail.ru</p>
                    </div>

                </div>
            </div>

            <div className="profile__buttons">
                <button className="profile__edit-button">Редактировать</button>
                <button className="profile__logout-button">Выйти из аккаунта</button>
            </div>
        </div>
    )
}

