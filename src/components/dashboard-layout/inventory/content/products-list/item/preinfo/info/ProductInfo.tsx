import { NavLink } from "react-router-dom"
import { IProducts } from "../../../../../../../../types/types"
import "./info.scss"
import ProductText from "../text/ProductText"

function ProductInfo({product}: {product: IProducts}) {
  return (
    <div className="product__info-wrapper">
      <img className="product__image" src={product.images[0]} alt="" />
      <div className="product__text">
        <div className="product__text-wrapper">
          <p title={product.name} className="product__text-name">
            {product.name}
          </p>
          <NavLink to={`${product.id}`} className="product__text-link">
            Подробнее
          </NavLink>
          <p className="product__text-price">${product.price}</p>
        </div>
        <ProductText product={product} flag="web" />
      </div>
    </div>
  )
}

export default ProductInfo
