import Loading from "../../../../../ui/loadings/Loading"
import "./sale-item.scss"

interface ISaleItem {
    info: {
        brand: string,
        name: string,
        color: string,
        size: string,
        price: string,
        image: string | null
    },
    lastElement?: boolean
}

function SaleItem ({info, lastElement = false}: ISaleItem) {

    return (
        <div className={"sale-item" + (lastElement ? " sale-item--last" : "")}>
            <div className="sale-item__image">
                {
                    info.image
                    ? <img src={info.image} alt="" />
                    : <Loading />
                }
            </div>
            <div className="sale-item__info">
                <p className="sale-item__info-brand">{info.brand}</p>
                <p className="sale-item__info-name">{info.name}</p>
                <p className="sale-item__info-color">{info.color}</p>
                <p className="sale-item__info-size">{info.size} US</p>
            </div>
            <p className="sale-item__price">+{info.price} ₽</p>
        </div>
    )
}

export default SaleItem