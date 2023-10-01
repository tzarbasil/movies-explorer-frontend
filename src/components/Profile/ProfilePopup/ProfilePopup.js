import "./ProfilePopup.css";

const ProfilePopup = ({ active, setActive }) => {
    return (
        <div className={active ? "profile__popup active" : "profile__popup"} onClick={() => setActive(false)}>
            <p className="profile__popup-text">Данные изменены</p>
        </div>
    )
}

export default ProfilePopup