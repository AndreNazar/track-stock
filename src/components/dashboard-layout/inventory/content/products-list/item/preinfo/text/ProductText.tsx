import { IProducts } from "../../../../../../../../types/types"
import Property from "../../property/Property"

function ProductText({product, flag}: {product: IProducts, flag: "web" | "mobile"}) {

    return (
        <div className={`product__text-wrapper product__text-wrapper--${flag}`}>
        <Property attribute="Размер" value={product.size} />
        <Property attribute="Источник" value={product.brand} />
        <Property attribute="Цвет" value={product.color} />
      </div>
    )
}

export default ProductText