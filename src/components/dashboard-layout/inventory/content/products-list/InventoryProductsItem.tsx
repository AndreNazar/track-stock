import { IProducts } from "../../../../../types/types"
import goat_png from "../../../../../assets/imgs/platforms/goat.png"
import outofstock_png from "../../../../../assets/imgs/platforms/outofstock.png"
import poizon_png from "../../../../../assets/imgs/platforms/poizon.png"
import stock_png from "../../../../../assets/imgs/platforms/stock.png"
import remove_svg from "../../../../../assets/imgs/control/remove.svg"
import cross_svg from "../../../../../assets/imgs/control/cross.svg"
import status_svg from "../../../../../assets/imgs/control/status.svg"
import edit_svg from "../../../../../assets/imgs/control/edit.svg"
import copy_svg from "../../../../../assets/imgs/control/copy.svg"
import ButtonDash from "../../../../ui/buttons/ButtonDash"
import down_arrow_svg from "../../../../../assets/imgs/actions/down-arrow-gray.svg" 
import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import ProductPropertiesPart from "./ProductPropertiesPart"

function InventoryProductsItem({product, selectedProduct, setSelectedProduct}:{product: IProducts, selectedProduct: number, setSelectedProduct: (id: number) => void}) {

  const productRef = useRef<HTMLDivElement>(null)
  const leftLineRef = useRef<HTMLDivElement>(null)
  const rightLineRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLImageElement>(null)

  const onFocusProduct = () => {
    product.id === selectedProduct ? setSelectedProduct(-1) : setSelectedProduct(product.id)
  }

  useEffect(() => {
    if(product.id === selectedProduct){
      productRef.current?.classList.add("product--expand")
      leftLineRef.current?.classList.add("product__between-line--expand")
      rightLineRef.current?.classList.add("product__between-line--expand")
      arrowRef.current?.classList.add("product__between-arrow--expand")
    }else{
      productRef.current?.classList.remove("product--expand")
      leftLineRef.current?.classList.remove("product__between-line--expand")
      rightLineRef.current?.classList.remove("product__between-line--expand")
      arrowRef.current?.classList.remove("product__between-arrow--expand")
    }
  }, [selectedProduct])

    return (
      <div ref={productRef} onClick={onFocusProduct} className="inventory-product">
        <div className="product__preinfo">
          <div className="product__info-wrapper">
            <img className="product__image" src={product.images[0]} alt="" />
            <div className="product__text">
              <div className="product__text-wrapper">
                <p title={product.name} className="product__text-name">{product.name}</p>
                <NavLink  to={`${product.id}`} className="product__text-link">Подробнее</NavLink>
                <p className="product__text-price">${product.price}</p>
              </div> 
              <div className="product__text-wrapper product__text-wrapper--web">
                <ProductPropertiesPart product={product} />
              </div>
            </div>
          </div>
          
          <div className="product__text-wrapper product__text-wrapper--mobile">
              <ProductPropertiesPart product={product} />
            </div>
          <div className="product__control-wrapper">
            <div className="product__buttons">
              <ButtonDash>Продано</ButtonDash>
              <ButtonDash>Разместить</ButtonDash>
            </div>
            <div className="product__control">
              <img className="product__control-remove" src={remove_svg} alt="" />
              <img className="product__control-close" src={cross_svg} alt="" />
              <img className="product__control-status" src={status_svg} alt="" />
              <img className="product__control-edit" src={edit_svg} alt="" />
              <div className="empty-div"/>
              <img className="product__control-copy" src={copy_svg} alt="" />
            </div>
          </div>
        </div>
        <div className="product__between">
          <div ref={leftLineRef}  className="product__between-line"></div>
          <img ref={arrowRef} className="product__between-arrow" src={down_arrow_svg} alt="" />
          <div ref={rightLineRef}  className="product__between-line"></div>
        </div>
        <div className="product__extrainfo">
          <div className="product__property">
            <span className="product__property-attribute">Артикул</span>
            <span className="product__property-value">{product.article}</span>
          </div>
          <div className="product__property">
            <span className="product__property-attribute">Дата выхода</span>
            <span className="product__property-value">{product.release_date}</span>
          </div>
          <div className="product__platforms">
            <div className="product__property">
              <img className="product__property-icon" src={goat_png} alt="" />
              <span className="product__property-value platform-value">{product.price_goat || "N/A"}</span>
            </div>
            <div className="product__property">
              <img className="product__property-icon" src={outofstock_png} alt="" />
              <span className="product__property-value platform-value">{product.price_outofstock || "N/A"}</span>
            </div>
            <div className="product__property">
              <img className="product__property-icon" src={poizon_png} alt="" />
              <span className="product__property-value platform-value">{product.price_poison || "N/A"}</span>
            </div>
            <div className="product__property">
              <img className="product__property-icon" src={stock_png} alt="" />
              <span className="product__property-value platform-value">{product.price_stockX || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default InventoryProductsItem