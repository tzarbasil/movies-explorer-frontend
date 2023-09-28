import "./FilterCheckbox.css";

export default function FilterCheckbox() {
    return (
        <div className="checkbox-container">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
                <span className="switch__span">Короткометражки</span>
            </label>
        </div>
    );
}