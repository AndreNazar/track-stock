import { IProducts } from "../../../../../types/types"
import "./products-list.scss"
import InventoryProductsItem from "./item/InventoryProductsItem"
import { useEffect, useState } from "react"
import { Api } from "../../../../../api/api"


function InventoryProductsList() {

  const [products, setProducts] = useState<IProducts[]>([])

  const [selectedProduct, setSelectedProduct] = useState<number>(-1)

  async function getProducts() {
    try {
      const api = new Api()
      const response = await api.getSneakers();
      console.log(response)
      setProducts(response.sneakers.map((p: any): IProducts => {
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
          price_outofstock: "",
          price_poison: "",
          price_stockX: "",
          priceDelivery: p.sneaker.price
        }
      }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="products-list">
        {products.map((p: IProducts) => <InventoryProductsItem 
        product={p} 
        key={p.id} 
        selectedProduct={selectedProduct} 
        setSelectedProduct={setSelectedProduct}/>
        )}
    </div>
  )
}

export default InventoryProductsList