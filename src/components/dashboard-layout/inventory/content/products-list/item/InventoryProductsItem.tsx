import { IProducts } from "../../../../../../types/types"
import { useRef } from "react"
import "./item.scss"
import BetweenBlock from "./between/BetweenBlock"
import ExtraInfo from "./extrainfo/ExtraInfo"
import PreInfo from "./preinfo/PreInfo"

interface InventoryProductsItemProps {
  product: IProducts
  selectedProduct: number
  setSelectedProduct: (id: number) => void
}

function InventoryProductsItem({ product, selectedProduct, setSelectedProduct }: InventoryProductsItemProps) {
  const productRef = useRef<HTMLDivElement>(null)

  const onFocusProduct = () => (product.id === selectedProduct ? setSelectedProduct(-1) : setSelectedProduct(product.id))

  return (
    <div ref={productRef} onClick={onFocusProduct} className="inventory-product">
      <PreInfo product={product} />
      <BetweenBlock selectedProduct={selectedProduct} product_id={product.id} productRef={productRef} />
      <ExtraInfo product={product} />
    </div>
  )
}

export default InventoryProductsItem
