import { IServiceBlock } from "../../../../../types/types"
import ButtonService from "../../../../ui/buttons/ButtonService"
import "./service-block.scss"

function ServiceBlock ({serviceInfo}: {serviceInfo: IServiceBlock}) {

    

    return <div className="service-block">
        <div className="service-block__icon">
            <img src={serviceInfo.img} alt="service-block" />
        </div>
        <div className="service-block__info">
            <p className="service-block__info-heading">{serviceInfo.title}</p>
            <p className="service-block__info-text">{serviceInfo.text}</p>
        </div>
        <div className="service-block__button">
            <ButtonService onClick={serviceInfo.onClick} isSelect={serviceInfo.isSelect}>{serviceInfo.isSelect ? "Отключить" : "Подключить"}</ButtonService>
        </div>
    </div>
}

export default ServiceBlock