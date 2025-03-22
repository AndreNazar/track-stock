import { useSelector } from "react-redux"
import Dropdown from "./dropdown/Dropdown"
import "./privacy-block.scss"

function PrivacyBlock() {

    const dataDropdowns = ["Скрыть", "Открыть"]
    const currentContext = useSelector((s: any) => s.selections.currentContext)

    return <div className="privacy">
        <p className="privacy__heading">Настройки приватности</p>
        <div className="privacy__fields">
            <Dropdown 
            title={"Аккаунт"} 
            data={dataDropdowns} 
            type="account"
            value={dataDropdowns[currentContext.account]} />
            <div/>
            <Dropdown 
            title={"Telegram"} 
            data={dataDropdowns}
            type="tg"
            value={dataDropdowns[currentContext.tg]} />
            <Dropdown 
            title={"ВКонтакте"} 
            data={dataDropdowns}
            type="vk"
            value={dataDropdowns[currentContext.vk]} />
        </div>
    </div>
}

export default PrivacyBlock