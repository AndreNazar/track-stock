export interface IBrand {
  id: number
  img: string
  link: string
}
export interface IProducts {
  id: number
  image: string
  name: string
  color: string
  brand: string
  article: string
  release_date: string
  price_stockX: string | null
  price_goat: string | null
  price_outofstock: string | null
  price_poison: string | null
  priceBuy: number
  priceDelivery: number
  condition: string
  sizeUS: string
  sizeUK: string
  sizeEU: string
  city: string
  placeOfTransaction: string
  checkedFitting: boolean
}

export enum eBrandKeys {
    id = "id",
    image = "image",
    name = "name",
    color = "color",
    brand = "brand",
    article = "article",
    release_date = "release_date",
    price_stockX = "price_stockX",
    price_goat = "price_goat",
    price_outofstock = "price_outofstock",
    price_poison = "price_poison",
    priceBuy = "priceBuy",
    priceDelivery = "priceDelivery",
    condition = "condition",
    sizeUS = "sizeUS",
    sizeUK = "sizeUK",
    sizeEU = "sizeEU",
    city = "city",
    placeOfTransaction = "placeOfTransaction",
    checkedFitting = "checkedFitting",
}

export interface ISearchProducts {
  id: number
  name: string
  image: string
  link: string
  article: string
}

export interface InfoList {
  title: string
  value: string | null
  img: string
}
export interface CardList {
  title: string
  value: string | null
}
export interface IProductSalesTab {
  type: string
  title: string
  active: boolean
}

export interface ICard {
  number: string
  date: string
}

export interface IServiceBlock {
  onClick: () => void
  isSelect: boolean
  img: string
  title: string
  text: string
}

export interface IBrandsSelect {
  id: number
  name: string
  selected: boolean
}

export interface IDataSelect {
  id: number
  name: string
  selected: boolean
}
