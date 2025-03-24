import { IProducts } from "../../../../../types/types"
import SaleItem from "./item/SaleItem"
import "./sales-block.scss"

function SalesBlock() {

  const products: IProducts[] = [
    {
      id: 1,
      brand: "Nike",
      name: "Air Force 1",
      color: "Core/Core/Core",
      sizeUS: "42",
      priceBuy: 12000,
      image: null,
      article: "123456789",
      price_stockX: null,
      price_goat: null,
      price_poison: null,
      condition: "Б/У",
      city: "Москва",
      placeOfTransaction: "Склад",
      checkedFitting: false,
      sizeUK: "42",
      sizeEU: "42",
      avg_price: "",
      dateBuy: "",
      inStore: false,
      isSale: false,
      priceSale: 0,
      dateSale: ""
    },
    {
      id: 2,
      brand: "Adidas",
      name: "Yeezy 350",
      color: "Black/Black/Black",
      sizeUS: "42",
      priceBuy: 24000,
      image: null,
      article: "12345679",
      price_stockX: null,
      price_goat: null,
      price_poison: null,
      condition: "Б/У",
      city: "Москва",
      placeOfTransaction: "Склад",
      checkedFitting: false,
      sizeUK: "42",
      sizeEU: "42",
      avg_price: "",
      dateBuy: "",
      inStore: false,
      isSale: false,
      priceSale: 0,
      dateSale: ""
    },
    {
      id: 3,
      brand: "New Balance",
      name: "574",
      color: "White/White/White",
      sizeUS: "42",
      priceBuy: 18000,
      image: null,
      article: "12345679",
      price_stockX: null,
      price_goat: null,
      price_poison: null,
      condition: "Б/У",
      city: "Москва",
      placeOfTransaction: "Склад",
      checkedFitting: false,
      sizeUK: "42",
      sizeEU: "42",
      avg_price: "",
      dateBuy: "",
      inStore: false,
      isSale: false,
      priceSale: 0,
      dateSale: ""
    }
  ]

  return (
    <div className="sales-block">
      <p className="sales-block__title">Лучшие продажи</p>
      <ul className="sales-block__list">
        {products.map((p: IProducts, i: number) => 
        <li key={i} className="sales-block__item">
          <SaleItem info={{
            brand: p.brand,
            color: p.color,
            name: p.name,
            size: p.sizeUS,
            price: p.priceBuy!.toString(),
            image: p.image
          }}
          lastElement={products.length === i+1} />
        </li>
        )}
      </ul>
    </div>
  )
}

export default SalesBlock