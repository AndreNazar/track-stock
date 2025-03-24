import { IProducts } from "../../../../../../../types/types"
import ProductControl from "./control/ProductControl"
import ProductInfo from "./info/ProductInfo"
import ProductText from "./text/ProductText"
import "./preinfo.scss"

function PreInfo({product}: {product: IProducts}) {
    return (
      <div className="product__preinfo">
        <ProductInfo product={product} />
        <ProductText product={product} flag="mobile" />
        <ProductControl product={product} />
      </div>
    )
  }

  export default PreInfo    