import { IProducts } from "../../../../../types/types"
import "./products-list.scss"
import InventoryProductsItem from "./item/InventoryProductsItem"
import { useEffect, useState } from "react"
import api from "../../../../../api/api"


function InventoryProductsList() {

  const [products, setProducts] = useState<IProducts[]>([])

  const [selectedProduct, setSelectedProduct] = useState<number>(-1)

  async function getProducts() {
    try {
      const response = await api.getSneakers();
      console.log(response)
      setProducts(response.sneakers.map((p: any) => {
        return {
          id: p.sneaker.id,
          images: [p.photo_url],
          name: p.sneaker.model,
          size: p.sneaker.eu_size,
          color: p.sneaker.color,
          brand: p.sneaker.brand.brand,
          article: p.sneaker.article,
          release_date: "",
          price: p.sneaker.price,
          price_stockX: null,
          price_goat: null,
          price_outofstock: null,
          price_poison: null,
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