import { ICard } from "../../../../../types/types"
import "./subscribe.scss"
import CardLinked from "./content/CardLinked"

function Subscribe(){

    const cardData: ICard = {
        number: "•••• •••• •••• 1234",
        date: "11/26"
    }

    return (
        <div className="subscribe-block">
            <CardLinked cardData={cardData}/>
            <div className="subscribe-block__tariff">
                <p className="tariff__heading heading-mini">Тариф</p>
                <div className="tariff__info">
                    <p className="tariff__info-name">Месячная со скидкой</p>
                    <p className="tariff__info-price">550 ₽</p>
                    <p className="tariff__info-next">Следующие списание 10.04.2025</p>
                    <p className="tariff__info-cancel">Отменить подписку</p>
                </div>
            </div>
        </div>
    )
}

export default Subscribe