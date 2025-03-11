import Property from "../property/Property"
import PropertyPlatform from "../property/PropertyPlatform"
import goat_png from "../../../../../../../assets/imgs/platforms/goat.png"
import outofstock_png from "../../../../../../../assets/imgs/platforms/outofstock.png"
import poizon_png from "../../../../../../../assets/imgs/platforms/poizon.png"
import stock_png from "../../../../../../../assets/imgs/platforms/stock.png"
import { IProducts } from "../../../../../../../types/types"
import "./extra-info.scss"

function ExtraInfo ({product}: {product: IProducts}) {

    return (
        <div className="product__extrainfo">
          <Property attribute="Артикул" value={product.article} />
          <Property attribute="Дата выхода" value={product.release_date} />
          <div className="product__platforms">
            <PropertyPlatform img={goat_png} value={product.price_goat} />
            <PropertyPlatform img={outofstock_png} value={product.price_outofstock} />
            <PropertyPlatform img={poizon_png} value={product.price_poison} />
            <PropertyPlatform img={stock_png} value={product.price_stockX} />
          </div>
        </div>
    )
}

export default ExtraInfo