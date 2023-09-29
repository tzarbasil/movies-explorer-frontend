import "./Promo.css";
import promoImg from '../../../images/web_image.svg';
import NavTab from "../../NavTab/NavTab";

export default function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета <span style={{ whiteSpace: 'nowrap' }}>Веб-разработки.</span></h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <NavTab />
            </div>
            <img className="promo__image" src={promoImg} alt="Логотип проекта" />
        </section>
    )
}

