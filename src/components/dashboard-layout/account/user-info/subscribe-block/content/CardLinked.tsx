import { ICard } from "../../../../../../types/types"
import "./card-linked.scss"
import close_img from "../../../../../../assets/imgs/control/big-cross.svg"

function CardLinked({cardData}: {cardData: ICard}){

    return (
        <div className="card">
        <p className="card__heading">Способ оплаты</p>
        <div className="card__wrapper">
            <div className="card__rect"></div>
            <div className="card__text">
                <p className="card__text-number">{cardData.number}</p>
                <p className="card__text-date">{cardData.date}</p>
            </div>
            <div className="card__close">
                <img src={close_img} alt="close" />
            </div>
        </div>
    </div>
    )
}

export default CardLinked