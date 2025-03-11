import { CardList } from "../../../../../types/types"
import Loading from "../../../../ui/loadings/Loading"
import Property from "../../../../ui/property/Property"
import "./card.scss"
import trash_png from "../../../../../assets/imgs/control/trash.svg"
import edit_png from "../../../../../assets/imgs/control/edit_2.svg"

interface CardProps {
    cardList: CardList[]
    mainImg: string | null
    name: string | null
    size: string | null
}

function Card({cardList, mainImg, name, size}: CardProps) {


    return <div className="product__card">
        <div className="card__icon">
            {mainImg ? <img src={mainImg} alt="" className="card__icon-main-img" /> : <Loading />}
        </div>
        <div className="card__info">
            {cardList[0].value 
            ? <>
                <p className="card__info-name">{name}</p>
                <p className="card__info-size">{size}</p>
                <ul className="card__property-list">
                    {cardList.map((p:CardList) => <li key={p.title} className="card__property-item">
                        <Property title={p.title} value={p.value} />
                    </li>)}
                </ul>
            </>
            : <Loading size={30} />
            }
        </div>
        
        <div className="card__control">
            <img src={trash_png} alt="" className="card__control-trash" />
            <img src={edit_png} alt="" className="card__control-edit" />
        </div>
    </div>
}

export default Card