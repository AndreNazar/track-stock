import { IProducts } from "../../../../../types/types"
import "./products-list.scss"
import InventoryProductsItem from "./InventoryProductsItem"
import boot_img from "../../../../../assets/imgs/boots/boots1.png"
import { useState } from "react"


function InventoryProductsList() {

  const products: IProducts[] = [
    {
      id: 1,
      images: [boot_img],
      link: "https://stockx.com/air-jordan-1-retro-high-og-dark-mocha",
      name: "Air Jordan 1 Retro High OG Dark Mocha",
      size: "10 US",
      color: "Dark Mocha",
      brand: "Nike",
      article: "315574-001",
      release_date: "2022-03-18",
      price: 190,
      price_stockX: "190",
      price_goat: null,
      price_outofstock: null,
      price_poison: null,
    },
    {
      id: 2,
      images: [boot_img],
      link: "https://stockx.com/air-jordan-1-retro-high-og-dark-mocha",
      name: "YZY QNTM Barium",
      size: "10 US",
      color: "Dark Mocha",
      brand: "Nike",
      article: "315574-001",
      release_date: "2022-03-18",
      price: 190,
      price_stockX: "190",
      price_goat: null,
      price_outofstock: null,
      price_poison: null,
    },
    {
      id: 3,
      images: [boot_img],
      link: "https://stockx.com/air-jordan-1-retro-high-og-dark-mocha",
      name: "YZY QNTM Barium",
      size: "10 US",
      color: "Dark Mocha",
      brand: "Nike",
      article: "315574-001",
      release_date: "2022-03-18",
      price: 190,
      price_stockX: "190",
      price_goat: null,
      price_outofstock: null,
      price_poison: null,
    }
  ]

  const [selectedProduct, setSelectedProduct] = useState<number>(-1)

  return (
    <div className="products-list">
        {products.map((p: IProducts) => <InventoryProductsItem product={p} key={p.id} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>)}
    </div>
  )
}

export default InventoryProductsList