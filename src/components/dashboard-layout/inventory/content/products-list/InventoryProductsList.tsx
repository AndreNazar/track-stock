import { IProducts } from "../../../../../types/types"
import "./products-list.scss"
import InventoryProductsItem from "./item/InventoryProductsItem"
import { useEffect, useState } from "react"
import { Api } from "../../../../../api/api"
import Loading from "../../../../ui/loadings/Loading"
import { useDispatch, useSelector } from "react-redux"
import { setProductList } from "../../../../../redux/slices/productSlice"


function InventoryProductsList() {

  const dispatch = useDispatch()
  const productList = useSelector((s: any) => s.product.productList)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<number>(-1)

  async function getProducts() {
    setLoading(true)
    try {
      const api = new Api()
      const response = await api.getSneakers();
      console.log(response)
      dispatch(setProductList(response.sneakers.map((p: any): IProducts => {
        setLoading(false)
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
          release_date: "",
          priceBuy: p.sneaker.price,
          placeOfTransaction: "",
          price_goat: "",
          price_poison: "",
          price_stockX: "",
          priceDelivery: p.sneaker.price
        }
      })))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  function sortedProducts():IProducts[] {
    let sortProducts = [...productList]
    return sortProducts.sort((a: IProducts, b: IProducts) => b.id - a.id)
  }

  return (
    <div className="products-list">
        {isLoading
        ? <Loading size={30} />
        : sortedProducts()
        .map((p: IProducts) => <InventoryProductsItem 
        product={p} 
        key={p.id} 
        selectedProduct={selectedProduct} 
        setSelectedProduct={setSelectedProduct}/>
        )}
    </div>
  )
}

export default InventoryProductsList