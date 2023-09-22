import { useNavigate } from 'react-router-dom';
import "./Error.css";



export default function Error() {
    const navigate = useNavigate();

    return (
        <div className="error">
            <div className="error__container">
                <h1 className="error__title">404</h1>
                <p className="error__subtitle">Страница не найдена</p>
                <button type="button" className="error__button" onClick={() => { navigate(-1) }}> Назад </button>
            </div>
        </div>
    )
}

