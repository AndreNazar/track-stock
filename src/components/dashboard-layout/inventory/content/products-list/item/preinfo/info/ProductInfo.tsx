import { NavLink } from "react-router-dom"
import { IProducts } from "../../../../../../../../types/types"
import "./info.scss"
import ProductText from "../text/ProductText"

function ProductInfo({product}: {product: IProducts}) {

  const linkHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation()
  }

  return (
    <div className="product__info-wrapper">
      <img className="product__image" src={product.image!} alt="" />
      <div className="product__text">
        <div className="product__text-wrapper">
          <p title={product.name} className="product__text-name">
            {product.name}
          </p>
          <NavLink onClick={linkHandler} to={`${product.id}`} className="product__text-link">
            Подробнее
          </NavLink>
          <p className="product__text-price">{product.priceBuy} ₽</p>
        </div>
        <ProductText product={product} flag="web" />
      </div>
    </div>
  )
}

export default ProductInfo
