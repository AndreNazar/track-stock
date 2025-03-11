import Dropdown from "./dropdown/Dropdown"
import "./privacy-block.scss"

function PrivacyBlock() {
    return <div className="privacy">
        <p className="privacy__heading">Настройки приватности</p>
        <div className="privacy__fields">
            <Dropdown title={"Номер телефона"} data={["Скрыть", "Всем пользователям", "Только друзьям"]} />
            <Dropdown title={"Аккаунт"} data={["Скрыть", "Всем пользователям", "Только друзьям"]} />
        </div>
    </div>
}

export default PrivacyBlock