import { Outlet } from "react-router"
import "./inventory-content.scss"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { switchTab } from "../../../../redux/slices/menuSlice"
import { setProductList } from "../../../../redux/slices/productSlice"
import Api from "../../../../api/api"
import { IProducts } from "../../../../types/types"

function InventoryContent() {

  const dispatch = useDispatch()
  const productList = useSelector((s: any) => s.product.productList)
  const [isLoading, setLoading] = useState<boolean>(false)

  async function getProducts() {
    
  
    setLoading(true)
    try {
      const api = new Api()
      const response = await api.getSneakers();

      setLoading(false)
      dispatch(setProductList(response.sneakers.map((p: any): IProducts => {
        return {
          id: p.sneaker.id,
          image: p.photo_url,
          name: p.sneaker.model,
          sizeEU: p.sneaker.eu_size,
          sizeUK: p.sneaker.uk_size,
          sizeUS: p.sneaker.us_size,
          color: p.sneaker.color,
          city: p.sneaker.city,
          checkedFitting: p.sneaker.fitting,
          condition: p.sneaker.condition,
          brand: p.sneaker.brand.brand,
          article: p.sneaker.article,
          avg_price: p.prices.avg_price,
          priceBuy: p.sneaker.price,
          placeOfTransaction: "",
          price_goat: p.prices.goat,
          price_poison: p.prices.poizon,
          price_stockX: p.prices.stock_x,
          priceSale: p.sneaker.price,
          dateBuy: "",
          inStore: p.sneaker.in_store,
          isSale: p.sneaker.is_sale,
        }
      })))
    } catch (error) {
      console.log(error)
    }
  }
  
  

  useEffect(() => {
    dispatch(switchTab("/inventory"))
    getProducts()
  }, [])



  return (
    <div className="inventory__content">
      <Outlet context={{productList, isLoading}} />
    </div>
  )
}

export default InventoryContent
