import { useEffect, useRef } from "react"
import down_arrow_svg from "../../../../../../../assets/imgs/actions/down-arrow-gray.svg"
import "./between-block.scss"

interface IBetweenBlockProps {
  selectedProduct: number
  product_id: number
  productRef: React.RefObject<HTMLDivElement | null>
}

function BetweenBlock({selectedProduct, product_id, productRef}: IBetweenBlockProps) {
  const leftLineRef = useRef<HTMLDivElement>(null)
  const rightLineRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (product_id === selectedProduct) {
      productRef.current?.classList.add("product--expand")
      leftLineRef.current?.classList.add("product__between-line--expand")
      rightLineRef.current?.classList.add("product__between-line--expand")
      arrowRef.current?.classList.add("product__between-arrow--expand")
    } else {
      productRef.current?.classList.remove("product--expand")
      leftLineRef.current?.classList.remove("product__between-line--expand")
      rightLineRef.current?.classList.remove("product__between-line--expand")
      arrowRef.current?.classList.remove("product__between-arrow--expand")
    }
  }, [selectedProduct])

  return (
    <div className="product__between">
      <div ref={leftLineRef} className="product__between-line"></div>
      <img ref={arrowRef} className="product__between-arrow" src={down_arrow_svg} alt="" />
      <div ref={rightLineRef} className="product__between-line"></div>
    </div>
  )
}

export default BetweenBlock
