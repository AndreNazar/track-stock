import { useSelector } from "react-redux"
import Dropdown from "./dropdown/Dropdown"
import "./privacy-block.scss"
import { useEffect, useState } from "react"
import Api from "../../../../../api/api"

function PrivacyBlock() {

    const dataDropdowns = ["Скрыть", "Открыть"]
    const currentContext = useSelector((s: any) => s.selections.currentContext)
    const [isLoading, setLoading] = useState(false)

    function updateVisionHandler(){
        if(!dataDropdowns[currentContext.tg]) return
        else setLoading(false)
        if(!isLoading){
            const api = new Api()
            api.updateVision({data: {show_telegram: !!currentContext.tg, show_vk: !!currentContext.vk}})
            .then((res) => {
                console.log(res)
            })
        }
    }

    useEffect(() => {
        setLoading(true)
        updateVisionHandler()
        
    }, [currentContext.tg, currentContext.vk])

    return <div className="privacy">
        <p className="privacy__heading">Настройки приватности</p>
        <div className="privacy__fields">
            <Dropdown 
            loading={isLoading}
            title={"Telegram"} 
            data={dataDropdowns}
            type="tg"
            value={dataDropdowns[currentContext.tg]} />
            <Dropdown 
            loading={isLoading}
            title={"ВКонтакте"} 
            data={dataDropdowns}
            type="vk"
            value={dataDropdowns[currentContext.vk]} />
        </div>
    </div>
}

export default PrivacyBlock