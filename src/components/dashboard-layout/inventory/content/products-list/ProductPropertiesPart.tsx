import { IProducts } from "../../../../../types/types"

function ProductPropertiesPart({product}: {product: IProducts}) {
  return (
    <>
      <div className="product__property">
        <span className="product__property-attribute">Размер</span>
        <span className="product__property-value">{product.size}</span>
      </div>
      <div className="product__property">
        <span className="product__property-attribute">Источник</span>
        <span className="product__property-value">{product.brand}</span>
      </div>
      <div className="product__property">
        <span className="product__property-attribute">Цвет</span>
        <span className="product__property-value">{product.color}</span>
      </div>
    </>
  )
}

export default ProductPropertiesPart
